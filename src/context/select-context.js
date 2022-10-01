import React from "react";

const SelectContext = React.createContext({
  movies: [],
  onSetMovie: (obj) => {},
});

export default SelectContext;
