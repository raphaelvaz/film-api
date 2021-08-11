import { DbFindAllMovie } from "../../data/usecases/DbFindAllMovie";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import findAllMovieController from "../../presentation/controllers/findAllMovieController";
import { Controller } from "../../presentation/protocols/controller";


export const findAllMovieFactory = (): Controller => {
    const movieRepository = new SqliteMovieRepository();
    const dbFindAllRepository = new DbFindAllMovie(movieRepository);
    const findAllController = new findAllMovieController(dbFindAllRepository);
    return findAllController;
}