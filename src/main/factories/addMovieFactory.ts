import { DbAddMovie } from "../../data/usecases/DbAddMovie";
import { sqliteGenreRepository } from "../../infra/repositories/Genre/sqliteGenreRepository";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import AddMovieController from "../../presentation/controllers/addMovieController";
import { Controller } from "../../presentation/protocols/controller";


export const addMovieFactory = (): Controller => {
    const movieRepository = new SqliteMovieRepository();
    const genreRepository = new sqliteGenreRepository();
    const dbAddMovie = new DbAddMovie(movieRepository, genreRepository);
    const addMovieController = new AddMovieController(dbAddMovie);
    return addMovieController;
}