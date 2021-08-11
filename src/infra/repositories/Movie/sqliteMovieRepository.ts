import { Op } from "sequelize";
import { AddMovieData, checkMovieData, MovieRepository } from "../../../data/protocols/MovieRepository";
import { Genre } from "../../../domain/entities/genre";
import { Movie } from "../../../domain/entities/movie";
import { Genre as ORMGenre, Movie as ORMMovie } from "../../orm/sequelize/models";

export class SqliteMovieRepository implements MovieRepository {
    async add({ title, year, country, genres }: AddMovieData): Promise<Movie> {
        const rawData = await ORMMovie.create({ title, year, country });
        for (const genre of genres as Genre[]) {
            await (rawData as any).addGenre(genre.id, { through: {} })
        }
        console.log(rawData.toJSON())
        const movie: Movie = Object.assign({ ...rawData.toJSON(), genres })
        return movie;
    }

    async exists({ title, year }: checkMovieData): Promise<Boolean> {
        const rawData = await ORMMovie.findOne({
            where: {
                [Op.and]: [
                    { title },
                    { year }
                ]
            }
        })
        if (rawData)
            return true;
        return false;
    }
    async findById(id: string): Promise<Movie | undefined> {
        const rawData = await ORMMovie.findOne({ where: { id }, include: ORMGenre })
        if (rawData) {
            const movie: Movie = Object.assign({ ...rawData.toJSON() });
            return movie;
        }
        return undefined;
    }
}