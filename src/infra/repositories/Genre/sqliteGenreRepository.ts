import { GenreRepository } from "../../../data/protocols/GenreRepository";
import { Genre } from "../../../domain/entities/genre";
import { Genre as ORMGenre } from '../../orm/sequelize/models'

export class sqliteGenreRepository implements GenreRepository {
    async add(type: string): Promise<Genre> {
        const rawData = await ORMGenre.create({ type });
        const genre: Genre = Object.assign({ ...rawData.toJSON() })
        return genre;

    }
    async exists(type: string): Promise<Genre | null> {
        const rawData = await ORMGenre.findOne({ where: { type } })

        if (rawData) {
            return Object.assign({ ...rawData.toJSON() }) as Genre;
        }
        return null;
    }
}