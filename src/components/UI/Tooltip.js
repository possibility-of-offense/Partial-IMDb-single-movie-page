import classes from "./Tooltip.module.css";

function Tooltip(props) {
  return (
    <div className={classes.tooltip}>
      <div className={classes["triangle-bottom"]}></div>
      <p>{props.children || "No action yet!"}</p>
    </div>
  );
}

export default Tooltip;
