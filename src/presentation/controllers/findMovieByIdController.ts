import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from '../protocols/controller'
import { notFound, serverError, successRequest } from "../helpers/httpHelper";
import { ServerError } from "../errors/serverError";
import { NotFoundError } from "../errors/notFoundError";
import { FindMovieById } from "../../domain/usecases/findMovieById";

export default class findMovieByIdController implements Controller {
    constructor(private readonly findMovieById: FindMovieById) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const movie = await this.findMovieById.find(id);
            if (movie)
                return successRequest(movie);

            return notFound(new NotFoundError('movie not found'));
        } catch (error) {
            return serverError(new ServerError())
        }
    }
}
