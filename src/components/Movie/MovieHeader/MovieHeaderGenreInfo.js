import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import Flex from "../../UI/Flex";
import classes from "./MovieHeaderGenreInfo.module.css";

function MovieHeaderGenreInfo() {
  const movieContext = useContext(MovieContext);

  const year = new Date(
    movieContext.movie.year_starts.seconds * 1000 +
      movieContext.movie.year_starts.nanoseconds / 1000000
  );

  return (
    <div className={`${classes["genre-info"]} mt-half`}>
      <Flex list={true} className={classes["genre-info__mobile-portrait"]}>
        <li>{movieContext.movie.genre}</li>
        <li>&#x2022;</li>
        <li>{year.getFullYear()}&mdash;</li>
      </Flex>
    </div>
  );
}

export default MovieHeaderGenreInfo;
