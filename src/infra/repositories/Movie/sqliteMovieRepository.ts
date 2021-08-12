import { Op } from "sequelize";
import { AddMovieData, checkMovieData, MovieRepository, UpdateMovieData } from "../../../data/protocols/MovieRepository";
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

    async findAll(): Promise<Movie[]> {
        const rawData = await ORMMovie.findAll({ include: ORMGenre })
        const movies = rawData.map((data) => {
            return data.toJSON();
        })
        return movies as Movie[];
    }
    async delete(id: string): Promise<boolean> {
        const isDeleted = await ORMMovie.destroy({ where: { id } });
        return isDeleted ? true : false;
    }

    async update({ id, title, year, country, genres }: UpdateMovieData): Promise<Movie> {
        //péssimo
        await ORMMovie.update({ title, year, country, genres }, { where: { id } });
        const rawData = await ORMMovie.findOne({ where: { id }, include: ORMGenre });

        const movie = rawData?.toJSON() as Movie;
        if (genres) {
            for (const genre of movie.genres) {
                await (rawData as any).removeGenre(genre.id, { through: {} })
            }
            for (const genre of genres as Genre[]) {
                await (rawData as any).addGenre(genre.id, { through: {} })
            }
        }
        const updatedMovie = await ORMMovie.findOne({ where: { id }, include: ORMGenre });

        return updatedMovie?.toJSON() as Movie;
    }
}