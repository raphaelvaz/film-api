import { Movie } from "../../domain/entities/movie";
import { FindMovieById } from "../../domain/usecases/findMovieById";
import { MovieRepository } from "../protocols/MovieRepository";

export class DbFindMovieById implements FindMovieById {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }

    async find(id: number): Promise<Movie | undefined> {
        const movie = await this.movieRepository.findById(id);
        if (movie)
            return movie;

        return undefined;
    }
}