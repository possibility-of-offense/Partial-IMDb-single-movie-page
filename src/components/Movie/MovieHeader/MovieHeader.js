import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import FlexColumnsSpaceBetween from "../../UI/FlexColumnsSpaceBetween";
import classes from "./MovieHeader.module.css";
import MovieHeaderGenreInfo from "./MovieHeaderGenreInfo";
import MovieRatingInfo from "./MovieRatingInfo";

function MovieHeader() {
  const movieContext = useContext(MovieContext);

  return (
    <FlexColumnsSpaceBetween className="mt-1" responsive_rows={true}>
      <div>
        <h1 className={classes.title}>{movieContext.movie.title}</h1>
        <MovieHeaderGenreInfo />
      </div>

      <MovieRatingInfo />
    </FlexColumnsSpaceBetween>
  );
}

export default MovieHeader;
