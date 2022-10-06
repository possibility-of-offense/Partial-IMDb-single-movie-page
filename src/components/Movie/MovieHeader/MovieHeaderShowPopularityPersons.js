import { useContext } from "react";
import MovieContext from "../../../context/movie-context";

import classes from "./MovieHeaderShowPopularityPersons.module.css";

function MovieHeaderShowPopularityPersons() {
  const movieContext = useContext(MovieContext);

  return (
    <div className={classes.popularity}>
      <h3>People that are watching this frequently</h3>
      <ul>
        {movieContext.movie.popularity.map((el) => (
          <li key={el.split(" ").join("").toLowerCase()}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieHeaderShowPopularityPersons;
