import Flex from "../../UI/Flex";
import Svg from "../../UI/Svg";
import classes from "./MovieRatingInfoBox.module.css";
import Alert from "../../UI/Alert";

import { useState } from "react";
import Modal from "../../UI/Modal";

function MovieRatingInfoBox(props) {
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    if (!props.toDisable) {
      props.onClick();
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className={classes["rating-box"]} onClick={handleClick}>
      <p>{props.title}</p>
      <Flex className={`${classes["rating-box__info"]} justify-center`}>
        <Svg classes={props.classes} id={props.id} path={props.path} />
        {showAlert && (
          <Modal>
            <Alert onHideAlert={setShowAlert}>{props.msgForAlert}</Alert>
          </Modal>
        )}
        <div>{props.children}</div>
      </Flex>
    </div>
  );
}

export default MovieRatingInfoBox;
