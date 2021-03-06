import { DbAddMovie } from "../../data/usecases/DbAddMovie";
import { InMemoryGenreRepository } from "../../infra/repositories/Genre/inMemoryGenreRepository";
import { sqliteGenreRepository } from "../../infra/repositories/Genre/sqliteGenreRepository";
import { InMemoryMovieRepository } from "../../infra/repositories/Movie/inMemoryMovieRepository";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import AddMovieController from "../../presentation/controllers/addMovieController";
import { Controller } from "../../presentation/protocols/controller";


export const addMovieFactory = (): Controller => {
    const movieRepository = new InMemoryMovieRepository();
    const genreRepository = new InMemoryGenreRepository();
    const dbAddMovie = new DbAddMovie(movieRepository, genreRepository);
    const addMovieController = new AddMovieController(dbAddMovie);
    return addMovieController;
}