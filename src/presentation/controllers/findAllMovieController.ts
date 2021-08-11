import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from '../protocols/controller'
import { notFound, serverError, successRequest } from "../helpers/httpHelper";
import { ServerError } from "../errors/serverError";
import { NotFoundError } from "../errors/notFoundError";
import { FindAllMovie } from "../../domain/usecases/findAllMovie";

export default class findAllMovieController implements Controller {
    constructor(private readonly findAllMovie: FindAllMovie) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const movies = await this.findAllMovie.find();
            if (movies.length)
                return successRequest(movies);

            return notFound(new NotFoundError('movies not found'));
        } catch (error) {
            return serverError(new ServerError())
        }
    }
}
