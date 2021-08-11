import { Movie } from "../../domain/entities/movie";
import { FindAllMovie } from "../../domain/usecases/findAllMovie";
import { MovieRepository } from "../protocols/MovieRepository";

export class DbFindAllMovie implements FindAllMovie {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }

    async find(): Promise<Movie[]> {
        const movies = await this.movieRepository.findAll();
        return movies
    }
}