import { DeleteMovie } from "../../domain/usecases/deleteMovie";
import { MovieRepository } from "../protocols/MovieRepository";

export class DbDeleteMovie implements DeleteMovie {
    constructor(
        private readonly movieRepository: MovieRepository
    ) { }

    async delete(id: number): Promise<boolean> {
        const movie = await this.movieRepository.delete(id);
        return movie;
    }
}