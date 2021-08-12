import { HttpRequest, HttpResponse } from "../protocols/http";
import { Controller } from '../protocols/controller'
import { badRequest, serverError, successRequest } from "../helpers/httpHelper";
import { MissingParamError } from "../errors/missingParamError";
import { ServerError } from "../errors/serverError";
import { UpdateMovie } from "../../domain/usecases/updateMovie";
import { NotFoundError } from "../errors/notFoundError";

export default class UpdateMovieController implements Controller {
    constructor(private readonly updateMovie: UpdateMovie) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params

            const fields = ['title', 'year', 'genres', 'country'];
            let flag = false;
            for (const field of fields) {
                if (httpRequest.body[field]) {
                    flag = true;
                }
            }

            if (flag) {
                const movie = await this.updateMovie.update({ id, ...httpRequest.body });
                return successRequest(movie);
            }

            return badRequest(new MissingParamError('editable fields: title, year, country and genres'))

        } catch (error) {
            if (error.name = 'not found')
                return badRequest(new NotFoundError('movie not found'));
            return serverError(new ServerError())
        }
    }
}
