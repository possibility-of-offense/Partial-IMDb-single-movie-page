import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import MovieActionBoxes from "./MovieActionBoxes";
import MovieImage from "./MovieImage";
import classes from "./MovieImages.module.css";
import MoviePicturesSlider from "./MoviePicturesSlider";

function MovieImages() {
  const movieContext = useContext(MovieContext);

  return (
    <div className={classes.images}>
      <MovieImage src={movieContext.movie.main_image_left} />
      {movieContext.showPicturesSlider ? (
        <MoviePicturesSlider
          name={movieContext.movie.title}
          pictures={movieContext.pictures}
        />
      ) : (
        <MovieImage src={movieContext.movie.main_image_right} />
      )}
      <div className={classes.boxes}>
        <MovieActionBoxes />
      </div>
    </div>
  );
}

export default MovieImages;
