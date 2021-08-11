import { Genre } from "./Genre";
import { Movie } from "./Movie";

Movie.belongsToMany(Genre, { through: 'MovieGenres' });
Genre.belongsToMany(Movie, { through: 'MovieGenres' });


export { Movie, Genre }