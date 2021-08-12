import { DbFindMovieById } from "../../data/usecases/DbFindMovieById";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import { InMemoryMovieRepository } from '../../infra/repositories/Movie/inMemoryMovieRepository'
import findMovieByIdController from "../../presentation/controllers/findMovieByIdController";
import { Controller } from "../../presentation/protocols/controller";


export const findMovieByIdFactory = (): Controller => {
    const movieRepository = new InMemoryMovieRepository();
    const dbFindByIdRepository = new DbFindMovieById(movieRepository);
    const findByIdController = new findMovieByIdController(dbFindByIdRepository);
    return findByIdController;
}