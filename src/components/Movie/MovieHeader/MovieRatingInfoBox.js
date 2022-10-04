import Flex from "../../UI/Flex";
import Svg from "../../UI/Svg";
import classes from "./MovieRatingInfoBox.module.css";

function MovieRatingInfoBox(props) {
  return (
    <div className={classes["rating-box"]} onClick={props.onClick}>
      <p>{props.title}</p>
      <Flex className={`${classes["rating-box__info"]} justify-center`}>
        <Svg classes={props.classes} id={props.id} path={props.path} />

        <div>{props.children}</div>
      </Flex>
    </div>
  );
}

export default MovieRatingInfoBox;
