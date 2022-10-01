import classes from "./MovieShortDescription.module.css";

function MovieShortDescription(props) {
  return (
    <div
      className={`${props.className ? props.className + " " : ""}${
        classes["main-text"]
      }`}
    >
      {props.children}
    </div>
  );
}

export default MovieShortDescription;
