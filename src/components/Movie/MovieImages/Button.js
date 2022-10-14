import { useEffect, useState } from "react";
import classes from "./Button.module.css";

function Button(props) {
  const [appendClass, setAppendClass] = useState(false);

  useEffect(() => {
    if (props.showBtn) {
      setAppendClass(true);
    } else {
      setAppendClass(false);
    }
  }, [props.showBtn]);

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${
        props.prev ? classes["button-prev"] : classes["button-next"]
      } ${appendClass ? classes["show-btn"] : ""}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
