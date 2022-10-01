import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import MovieActionBoxes from "./MovieActionBoxes";
import MovieImage from "./MovieImage";
import classes from "./MovieImages.module.css";

function MovieImages() {
  const movieContext = useContext(MovieContext);

  return (
    <div className={classes.images}>
      <MovieImage src={movieContext.movie.main_image_left} />
      <MovieImage src={movieContext.movie.main_image_right} />
      <div className={classes.boxes}>
        <MovieActionBoxes />
      </div>
    </div>
  );
}

export default MovieImages;
