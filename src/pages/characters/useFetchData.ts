import { useState, useEffect } from "react";
import { Character } from "../../types/characters";
import { Movie } from "../../types/movie";
import { getAll as getCharacters } from "../../api/characterApi";
import { getMovie } from "../../api/movieApi";

const useFetchData = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      const charcaterList = await getCharacters();
      const movieData = await getMovie();

      setCharacters(charcaterList);
      setMovie(movieData);
    };

    fetchData();
  }, []);

  return {
    characters,
    movie,
  };
};

export default useFetchData;
