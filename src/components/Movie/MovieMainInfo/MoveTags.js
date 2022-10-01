import Flex from "../../UI/Flex";
import classes from "./MovieTags.module.css";

import { useContext } from "react";
import MovieContext from "../../../context/movie-context";

function MovieTags() {
  const movieContext = useContext(MovieContext);

  return (
    <div className={classes.tags}>
      <Flex>
        {movieContext.movie.tags.length > 0 &&
          movieContext.movie.tags.map((tag) => (
            <button
              key={tag.toLowerCase() + Math.trunc(Math.random() * 500 + 1)}
            >
              {tag}
            </button>
          ))}
      </Flex>
    </div>
  );
}

export default MovieTags;
