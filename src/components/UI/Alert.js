import { Fragment, useEffect, useState } from "react";
import classes from "./Alert.module.css";

function Alert(props) {
  const [hideAlert, setHideAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideAlert(true);
      props.onHideAlert((prev) => !prev);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Fragment>
      {!hideAlert && <div className={classes.alert}>{props.children}</div>}
    </Fragment>
  );
}

export default Alert;
