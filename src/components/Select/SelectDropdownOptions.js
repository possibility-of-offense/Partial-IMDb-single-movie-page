import { Fragment } from "react";

function SelectDropdownOptions(props) {
  return (
    <Fragment>
      <option disabled value="choose a movie">
        CHOOSE A MOVIE
      </option>
      {props.movies.map((el) => (
        <option key={el.id} value={el.id}>
          {el.title}
        </option>
      ))}
    </Fragment>
  );
}

export default SelectDropdownOptions;
