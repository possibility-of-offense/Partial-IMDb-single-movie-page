import React from "react";

const MovieContext = React.createContext({
  movie: {},
  ratingUpdated: () => {},
});

export default MovieContext;
