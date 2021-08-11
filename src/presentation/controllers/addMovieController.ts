import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from '../protocols/controller'
import { badRequest, serverError, successRequest } from "../helpers/httpHelper";
import { MissingParamError } from "../errors/missingParamError";
import { AddMovie } from "../../domain/usecases/addMovie";
import { ServerError } from "../errors/serverError";
import { AlreadyExistsError } from "../errors/alreadyExistsError";

export default class AddMovieController implements Controller {
    constructor(private readonly addMovie: AddMovie) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = ['title', 'year', 'genres', 'country'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field])
                    return badRequest(new MissingParamError(field));
            }
            const movie = await this.addMovie.add(httpRequest.body);
            return successRequest(movie);

        } catch (error) {
            if (error.name = 'exists')
                return badRequest(new AlreadyExistsError(httpRequest.body));
            return serverError(new ServerError())
        }
    }
}
