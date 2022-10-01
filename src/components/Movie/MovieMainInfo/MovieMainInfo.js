import Grid from "../../UI/Grid";
import MovieTags from "./MoveTags";
import MovieNextEpisode from "./MovieNextEpisode";
import MovieShortDescription from "./MovieShortDescription";
import MovieCreators from "./MovieCreators";
import MovieStars from "./MovieStars";
import { useContext } from "react";
import MovieContext from "../../../context/movie-context";
import classes from "./MovieMainInfo.module.css";

function MovieMainInfo() {
  const movieContext = useContext(MovieContext);

  return (
    <Grid
      className={`${classes["movie-info__mobile-portrait"]} mt-1`}
      columns="1fr .5fr"
      gap="4"
    >
      <div className="movie-main-info__left">
        <MovieTags />
        <MovieShortDescription>
          {movieContext.movie.short_info}
        </MovieShortDescription>
        <br />
        <MovieCreators persons={["Patrick McKay", "John D. Payne"]} />
        <MovieStars bottomBorder={true} />
      </div>
      <div className="movie-main-info__right">
        {/* TODO fill the firestore with data about this component */}
        <MovieNextEpisode />
      </div>
    </Grid>
  );
}

export default MovieMainInfo;
