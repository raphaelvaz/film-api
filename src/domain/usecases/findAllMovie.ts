import { Movie } from "../entities/movie";

export interface FindAllMovie {
    find(): Promise<Movie[]>
}