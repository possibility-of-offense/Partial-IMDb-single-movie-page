import classes from "./Svg.module.css";

function Svg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={`${props.classes} ${classes.svg}`}
      id={props.id}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d={props.path}></path>
    </svg>
  );
}

export default Svg;
