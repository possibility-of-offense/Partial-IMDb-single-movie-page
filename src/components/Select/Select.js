import { useContext, useState } from "react";
import SelectContext from "../../context/select-context";
import classes from "./Select.module.css";
import SelectDropdown from "./SelectDropdown";

function Select() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectContext = useContext(SelectContext);

  const getTitle = selectContext.movies?.find(
    (movie) => movie.id === selectedMovie
  );

  return (
    <div className={classes.select}>
      {!selectedMovie ? (
        <h3>Select a movie</h3>
      ) : (
        <h3 className={classes["selected-movie"]}>
          Selected movie: {getTitle && getTitle.title}
        </h3>
      )}
      <SelectDropdown onSetSelectedMovie={setSelectedMovie} />
    </div>
  );
}

export default Select;
