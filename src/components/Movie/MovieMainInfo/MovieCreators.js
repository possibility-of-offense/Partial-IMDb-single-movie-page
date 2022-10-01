import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import MovieCreditPersons from "./MovieCreditPersons";

function MovieCreators() {
  const movieContext = useContext(MovieContext);

  return (
    <MovieCreditPersons
      description="Creators"
      persons={movieContext.movie.creators}
    />
  );
}

export default MovieCreators;
