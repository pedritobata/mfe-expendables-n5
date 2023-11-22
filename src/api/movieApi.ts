import { movie } from "../data/dummy";
import { Movie } from "../types/movie";

export const getMovie = async (): Promise<Movie> => {
  return movie;
};
