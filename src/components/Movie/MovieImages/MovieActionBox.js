import Svg from "../../UI/Svg";

import classes from "./MovieActionBox.module.css";
import Tooltip from "../../UI/Tooltip";
import useTooltip from "../../../hooks/use-tooltip";
import { Fragment, useCallback, useContext } from "react";
import MovieContext from "../../../context/movie-context";

function MovieActionBox(props) {
  const [isHovering, action] = useTooltip();
  const { tooltipVisibility } = props;

  const movieContext = useContext(MovieContext);
  const { onShowPicturesSliderHandle } = movieContext;

  const showPicturesSlider = useCallback(() => {
    onShowPicturesSliderHandle();
  }, [onShowPicturesSliderHandle]);

  return (
    <Fragment>
      {!tooltipVisibility ? (
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
      ) : (
        <div className={classes.box} onClick={showPicturesSlider}>
          <div>
            <Svg id={props.id} classes={props.classes} path={props.path} />
          </div>
          <p>{props.text}</p>
        </div>
      )}
    </Fragment>
  );
}

export default MovieActionBox;
