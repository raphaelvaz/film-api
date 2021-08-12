import { AddMovieData, checkMovieData, MovieRepository, UpdateMovieData } from "../../../data/protocols/MovieRepository";
import { Movie } from "../../../domain/entities/movie";

const movies: Movie[] = [];
let id = 0;

export class InMemoryMovieRepository implements MovieRepository {
    async add({ title, year, country, genres }: AddMovieData): Promise<Movie> {
        const movie: Movie = Object.assign({
            id, title, year, country, genres, createdAt: Date.now(), updatedAt: Date.now(),
        })
        movies.push(movie);
        id++;
        return movie;
    }

    async exists({ title, year }: checkMovieData): Promise<Boolean> {
        const movieExists = movies.find(movie => movie.title === title && movie.year === year);
        if (movieExists) {
            return true;
        }
        return false;
    }
    async findById(id: number): Promise<Movie | undefined> {
        const movie = movies.find(movie => movie.id == id);
        return movie;
    }

    async findAll(): Promise<Movie[]> {
        return movies;
    }
    async delete(id: number): Promise<boolean> {
        const movieIndex = movies.findIndex(movie => movie.id == id);
        if (movieIndex === -1) return false;
        movies.splice(movieIndex, 1);
        return true;
    }

    async update({ id, title, year, country, genres }: UpdateMovieData): Promise<Movie> {
        movies.forEach(movie => {
            if (movie.id == id) {
                if (title) movie.title = title
                if (year) movie.year = year
                if (country) movie.country = country
                if (genres !== [] && genres !== undefined) movie.genres = genres
            }
        })
        const movie = await this.findById(id);
        return movie as Movie;
    }
}