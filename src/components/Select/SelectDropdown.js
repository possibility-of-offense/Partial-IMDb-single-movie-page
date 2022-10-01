import { useContext, useState } from "react";
import SelectContext from "../../context/select-context";
import Container from "../UI/Container";
import classes from "./SelectDropdown.module.css";
import SelectDropdownOptions from "./SelectDropdownOptions";

function SelectDropdown({ onSetSelectedMovie }) {
  const selectContext = useContext(SelectContext);
  const [selected, setSelected] = useState("choose a movie");

  function handleSelectSubmit(e) {
    e.preventDefault();
    if (selected) {
      selectContext.onSetMovie({ id: selected });
      onSetSelectedMovie(selected);
    }
  }

  function setSelectedValue(val) {
    setSelected(val);
  }

  return (
    <Container className={classes["select-container"]}>
      <form className={classes["select-form"]} onSubmit={handleSelectSubmit}>
        <select
          value={selected}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {selectContext.movies.length > 0 ? (
            <SelectDropdownOptions movies={selectContext.movies} />
          ) : (
            <option>No values yet!</option>
          )}
        </select>
        <button
          className={`${
            selectContext.movies.length === 0 || !selected
              ? classes["disable-btn"]
              : ""
          }`}
          disabled={selectContext.movies.length === 0 || !selected}
        >
          Pick a movie
        </button>
      </form>
    </Container>
  );
}

export default SelectDropdown;
