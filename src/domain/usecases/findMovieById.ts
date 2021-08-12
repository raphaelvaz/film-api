import { Movie } from "../entities/movie";

export interface FindMovieById {
    find(id: number): Promise<Movie | undefined>
}