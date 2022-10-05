import Svg from "../../UI/Svg";

import classes from "./MovieActionBox.module.css";
import Tooltip from "../../UI/Tooltip";
import useTooltip from "../../../hooks/use-tooltip";

function MovieActionBox(props) {
  const [isHovering, action] = useTooltip();

  return (
    <div
      onMouseEnter={() => action("hover")}
      onMouseLeave={() => action("unhover")}
      className={classes.box}
    >
      {isHovering && <Tooltip></Tooltip>}
      <div>
        <Svg id={props.id} classes={props.classes} path={props.path} />
      </div>
      <p>{props.text}</p>
    </div>
  );
}

export default MovieActionBox;
