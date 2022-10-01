import classes from "./FlexColumnsSpaceBetween.module.css";

function FlexColumnsSpaceBetween(props) {
  return (
    <div
      className={`${classes.flex} ${props.className ? props.className : ""} ${
        props.responsive_rows ? classes["stack-rows"] : classes["stack-columns"]
      }`}
    >
      {props.children}
    </div>
  );
}

export default FlexColumnsSpaceBetween;
