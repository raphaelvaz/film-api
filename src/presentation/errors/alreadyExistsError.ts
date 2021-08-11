import { AddMovieRequestData } from "../../domain/usecases/addMovie";

export class AlreadyExistsError extends Error {
    constructor(movieData: AddMovieRequestData) {
        super(`${movieData.title} - ${movieData.year} already exists in our database`)
    }
}