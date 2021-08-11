import { Genre } from "../../domain/entities/genre";
import { Movie } from "../../domain/entities/movie";
import { AddMovie, AddMovieRequestData } from "../../domain/usecases/addMovie";
import { GenreRepository } from "../protocols/GenreRepository";
import { MovieRepository } from "../protocols/MovieRepository";

export class DbAddMovie implements AddMovie {
    constructor(
        private readonly movieRepository: MovieRepository,
        private readonly genreRepository: GenreRepository
    ) { }

    async add(movieData: AddMovieRequestData): Promise<Movie> {
        const { title, year, country, genres } = movieData;
        const movieExists = await this.movieRepository.exists({ title, year });

        if (!movieExists) {
            const genresFromMovie: Genre[] = [];
            for (const genre of genres) {
                const storageGenre = await this.genreRepository.exists(genre);
                if (!storageGenre) {
                    const createdGenre = await this.genreRepository.add(genre);
                    genresFromMovie.push(createdGenre);
                } else {
                    genresFromMovie.push(storageGenre);
                }
            }
            const movie = await this.movieRepository.add({ title, year, country, genres: genresFromMovie });

            return movie;
        }

        const error = new Error()
        error.name = 'exists';
        throw error;
    }
}