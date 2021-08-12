import { GenreRepository } from "../../../data/protocols/GenreRepository";
import { Genre } from "../../../domain/entities/genre";

const genres: Genre[] = [];
let id = 0;

export class InMemoryGenreRepository implements GenreRepository {
    async add(type: string): Promise<Genre> {
        const genre: Genre = Object.assign({
            id, type, createdAt: Date.now(), updatedAt: Date.now(),
        })
        genres.push(genre);
        id++;
        return genre;
    }
    async exists(type: string): Promise<Genre | undefined> {
        const genreExists = genres.find(genre => genre.type === type);
        return genreExists
    }
}