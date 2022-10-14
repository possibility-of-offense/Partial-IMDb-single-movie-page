import React from "react";

const MovieContext = React.createContext({
  movie: {},
  ratingUpdated: () => {},
  pictures: [],
  showPicturesSlider: false,
  onShowPicturesSliderHandle: () => {},
});

export default MovieContext;
