import { Genre } from "../../domain/entities/genre";
import { Movie } from "../../domain/entities/movie";
import { UpdateMovieRequestData } from "../../domain/usecases/updateMovie";

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

export interface UpdateMovieData {
    id: number;
    title?: string;
    year?: number;
    genres?: Genre[];
    country?: string;
}

export interface MovieRepository {
    add: (movieData: AddMovieData) => Promise<Movie>
    exists: (movieData: checkMovieData) => Promise<Boolean>
    findById: (id: string) => Promise<Movie | undefined>
    findAll: () => Promise<Movie[]>
    delete: (id: string) => Promise<boolean>
    update: (movieData: UpdateMovieData) => Promise<Movie>
}