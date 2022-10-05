import classes from "./MovieNextEpisode.module.css";
import Svg from "../../UI/Svg";
import Grid from "../../UI/Grid";
import Tooltip from "../../UI/Tooltip";

import useTooltip from "../../../hooks/use-tooltip";

function MovieNextEpisode() {
  const [isHovering, action] = useTooltip();

  return (
    <div
      onMouseEnter={() => action("hover")}
      onMouseLeave={() => action("unhover")}
      className={classes["next-episode-wrapper"]}
    >
      {isHovering && <Tooltip></Tooltip>}
      <div className={classes["next-episode"]}>
        <h5>NEXT EPISODE</h5>
        <p>September 30, 2022</p>
      </div>
      <div className={classes["watch-on"]}>
        <Grid alignCenter="center" columns="auto 1fr" gap="0.4">
          <Svg
            classes="ipc-icon ipc-icon--play-circle-outline ipc-button__icon ipc-button__icon--pre"
            id="iconContext-play-circle-outline"
            path="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          />
          <div onClick={() => action("hover")}>
            <h5>Watch on Prime Video</h5>
            <p>S1 included with Prime</p>
          </div>
        </Grid>
      </div>
      <div className={classes["add-to"]} onClick={() => action("hover")}>
        <Grid
          columns="auto 1fr auto"
          gap="0.5"
          alignCenter="center"
          className={`${classes["justify-items-start"]}`}
        >
          <span>&#43;</span>
          <h5>Add to WatchList</h5>
          <div className={classes.svg}>
            <button>
              <Svg
                classes="ipc-icon ipc-icon--arrow ipc-btn__icon"
                id="iconContext-arrow"
                path="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"
              />
            </button>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default MovieNextEpisode;
