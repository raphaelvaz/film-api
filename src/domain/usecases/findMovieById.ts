import { Movie } from "../entities/movie";

export interface FindMovieById {
    find(id: string): Promise<Movie | undefined>
}