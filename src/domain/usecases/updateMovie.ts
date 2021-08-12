import { Movie } from "../entities/movie";

export interface UpdateMovieRequestData {
    id: number;
    title?: string;
    year?: number;
    genres?: string[];
    country?: string;
}

export interface UpdateMovie {
    update(updateMovieData: UpdateMovieRequestData): Promise<Movie>
}