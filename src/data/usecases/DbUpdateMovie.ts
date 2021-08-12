import { Genre } from "../../domain/entities/genre";
import { Movie } from "../../domain/entities/movie";
import { UpdateMovie, UpdateMovieRequestData } from "../../domain/usecases/updateMovie";
import { GenreRepository } from "../protocols/GenreRepository";
import { MovieRepository } from "../protocols/MovieRepository";

export class DbUpdateMovie implements UpdateMovie {
    constructor(
        private readonly movieRepository: MovieRepository,
        private readonly genreRepository: GenreRepository,
    ) { }

    async update({ id, title, year, country, genres }: UpdateMovieRequestData): Promise<Movie> {
        if (genres) {
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
            const movie = await this.movieRepository.update({ id, title, year, country, genres: genresFromMovie });
            if (movie)
                return movie;
        }
        const movie = await this.movieRepository.update({ id, title, year, country });
        if (movie)
            return movie;

        const error = new Error()
        error.name = 'not found';
        throw error;
    }
}