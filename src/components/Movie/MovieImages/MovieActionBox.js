import Svg from "../../UI/Svg";
import { useCallback, useState } from "react";

import classes from "./MovieActionBox.module.css";
import Tooltip from "../../UI/Tooltip";

function MovieActionBox(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = useCallback(() => {
    setIsHovering((prev) => !prev);
  }, []);

  const handleUnhover = useCallback(() => {
    setIsHovering((prev) => !prev);
  }, []);

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
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
