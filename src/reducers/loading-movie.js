function loadingMovieReducer(state, action) {
  switch (action.type) {
    case "START_FETCHING":
      state = { ...state, startFetching: true, showMovie: false };
      break;
    case "SHOW_MOVIE":
      state = { ...state, startFetching: false, showMovie: true };
      break;
    case "SET_MOVIE":
      state = { ...state, movie: action.payload };
      break;
  }
  return state;
}

export default loadingMovieReducer;
