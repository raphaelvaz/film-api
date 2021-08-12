import { DbDeleteMovie } from "../../data/usecases/DbDeleteMovie";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import DeleteMovieController from "../../presentation/controllers/deleteMovieController";
import { Controller } from "../../presentation/protocols/controller";


export const deleteMovieFactory = (): Controller => {
    const movieRepository = new SqliteMovieRepository();
    const dbDeleteMovie = new DbDeleteMovie(movieRepository);
    const deleteMovieController = new DeleteMovieController(dbDeleteMovie);
    return deleteMovieController;

}