import { DbFindMovieById } from "../../data/usecases/DbFindMovieById";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import findMovieByIdController from "../../presentation/controllers/findMovieByIdController";
import { Controller } from "../../presentation/protocols/controller";


export const findMovieByIdFactory = (): Controller => {
    const movieRepository = new SqliteMovieRepository();
    const dbFindByIdRepository = new DbFindMovieById(movieRepository);
    const findByIdController = new findMovieByIdController(dbFindByIdRepository);
    return findByIdController;
}