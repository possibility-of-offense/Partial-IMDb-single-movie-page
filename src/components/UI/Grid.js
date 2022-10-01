import classes from "./Grid.module.css";

function Grid(props) {
  return (
    <div
      style={{
        gridTemplateColumns: `${props.columns}`,
        gap: `${props.gap}rem`,
        alignItems: props.alignCenter ? props.alignCenter : "",
      }}
      className={`${classes.grid} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Grid;
