import { DbUpdateMovie } from "../../data/usecases/DbUpdateMovie";
import { sqliteGenreRepository } from "../../infra/repositories/Genre/sqliteGenreRepository";
import { SqliteMovieRepository } from "../../infra/repositories/Movie/sqliteMovieRepository";
import { InMemoryMovieRepository } from '../../infra/repositories/Movie/inMemoryMovieRepository';
import { InMemoryGenreRepository } from '../../infra/repositories/Genre/inMemoryGenreRepository'
import UpdateMovieController from "../../presentation/controllers/updateMovieController";
import { Controller } from "../../presentation/protocols/controller";



export const updateMovieFactory = (): Controller => {
    const movieRepository = new InMemoryMovieRepository();
    const genreRepository = new InMemoryGenreRepository();
    const dbUpdateMovie = new DbUpdateMovie(movieRepository, genreRepository);
    const updateController = new UpdateMovieController(dbUpdateMovie);
    return updateController;
}