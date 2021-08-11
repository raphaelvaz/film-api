import { Movie } from "../../domain/entities/movie";
import { HttpResponse } from "../protocols/http";

export const badRequest = (error: Error): HttpResponse => {
    return {
        statusCode: 400,
        body: error
    }
}

export const successRequest = (movie: Movie): HttpResponse => {
    return {
        statusCode: 200,
        body: movie,
    }
}

export const serverError = (error: Error): HttpResponse => {
    return {
        statusCode: 500,
        body: error
    }
}