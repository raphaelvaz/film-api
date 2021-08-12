import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from '../protocols/controller'
import { badRequest, notFound, serverError, successRequest } from "../helpers/httpHelper";
import { ServerError } from "../errors/serverError";
import { NotFoundError } from "../errors/notFoundError";
import { MissingParamError } from "../errors/missingParamError";
import { DeleteMovie } from "../../domain/usecases/deleteMovie";

export default class DeleteMovieController implements Controller {
    constructor(private readonly deleteMovie: DeleteMovie) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            if (!httpRequest.params) {
                return badRequest(new MissingParamError('id'));
            }
            const { id } = httpRequest.params
            const movies = await this.deleteMovie.delete(id);
            if (movies)
                return successRequest({});

            return notFound(new NotFoundError('movies not found'));
        } catch (error) {
            return serverError(new ServerError())
        }
    }
}