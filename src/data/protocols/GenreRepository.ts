import { Genre } from '../../domain/entities/genre'

export interface GenreRepository {
    add: (type: string) => Promise<Genre>
    exists: (type: string) => Promise<Genre | null>
}