import { Genre } from "./genre";

export interface Movie {
    id: string;
    title: string;
    year: number;
    genres: Genre[];
    country: string;
    updatedAt: Date,
    createdAt: Date,
}