import { Genre } from "../../domain/entities/genre";
import { Movie } from "../../domain/entities/movie";

export interface checkMovieData {
    title: string;
    year: number;
}

export interface AddMovieData {
    title: string;
    country: string;
    year: number;
    genres?: Genre[];
}

export interface MovieRepository {
    add: (movieData: AddMovieData) => Promise<Movie>
    exists: (movieData: checkMovieData) => Promise<Boolean>
    findById: (id: string) => Promise<Movie | undefined>
}