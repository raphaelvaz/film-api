import { Movie } from "../entities/movie";

export interface AddMovieRequestData {
    title: string;
    year: number;
    genres: string[];
    country: string;
}

export interface AddMovie {
    add(movieData: AddMovieRequestData): Promise<Movie>
}