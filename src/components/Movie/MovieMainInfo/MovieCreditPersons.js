import Flex from "../../UI/Flex";
import classes from "./MovieCreditPersons.module.css";

function MovieCreditPersons(props) {
  return (
    <div
      className={`${classes.box} ${
        props.bottomBorder ? classes["bottom-border"] : ""
      }`}
    >
      <Flex>
        <h5>{props.description}</h5>
        <div>
          <ul>
            {props.persons.length > 0 &&
              props.persons.map((person) => {
                return (
                  <li key={person.toLowerCase().split(" ").join("")}>
                    {person}
                  </li>
                );
              })}
          </ul>
        </div>
      </Flex>
    </div>
  );
}

export default MovieCreditPersons;
