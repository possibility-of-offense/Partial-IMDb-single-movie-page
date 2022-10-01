import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import MovieCreditPersons from "./MovieCreditPersons";

function MovieStars(props) {
  const movieContext = useContext(MovieContext);

  return (
    <MovieCreditPersons
      bottomBorder={props.bottomBorder || false}
      description="Stars"
      persons={movieContext.movie.stars}
    />
  );
}

export default MovieStars;
