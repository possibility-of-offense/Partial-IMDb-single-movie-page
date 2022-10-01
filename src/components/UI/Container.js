import classes from "./Container.module.css";

function Container(props) {
  return (
    <div
      className={`${classes.container} ${
        props.className || classes["container-large"]
      }`}
    >
      {props.children}
    </div>
  );
}

export default Container;
