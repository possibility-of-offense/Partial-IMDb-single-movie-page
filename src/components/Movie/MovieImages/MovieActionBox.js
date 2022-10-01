import Svg from "../../UI/Svg";

import classes from "./MovieActionBox.module.css";

function MovieActionBox(props) {
  return (
    <div className={classes.box}>
      <div>
        <Svg id={props.id} classes={props.classes} path={props.path} />
      </div>
      <p>{props.text}</p>
    </div>
  );
}

export default MovieActionBox;
