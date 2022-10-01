import classes from "./Flex.module.css";

function Flex(props) {
  let output;

  if (props.list) {
    output = (
      <ul
        className={`${classes.flex} ${props.className ? props.className : ""}`}
      >
        {props.children}
      </ul>
    );
  } else {
    output = (
      <div
        className={`${classes.flex} ${props.className ? props.className : ""}`}
      >
        {props.children}
      </div>
    );
  }

  return output;
}

export default Flex;
