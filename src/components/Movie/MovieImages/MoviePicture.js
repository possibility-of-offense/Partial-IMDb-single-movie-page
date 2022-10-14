import classes from "./MoviePicture.module.css";

function MoviePicture(props) {
  return (
    <div className={classes.div}>
      <img src={props.src} alt={props.nameOfMovie} title={props.nameOfMovie} />
    </div>
  );
}
export default MoviePicture;
