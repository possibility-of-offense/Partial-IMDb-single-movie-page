import { useState } from "react";
import { requireValidator } from "../../helpers/factories";
import classes from "./Input.module.css";

// TODO may use useReducer() to manage the overall state

function Input({
  type,
  label,
  value,
  onChange,
  setIfWasTouched,
  onSetError,
  onValidate,
  onSetRating,
}) {
  const [labelClass, setLabelClass] = useState(false);
  const [valueFilled, setValueFilled] = useState(false);

  function handleClick() {
    setLabelClass(true);
    setIfWasTouched(true);
  }

  function handleBlur(e) {
    if (!valueFilled) {
      setLabelClass(false);
    }

    if (
      !requireValidator().validate(e.target.value) ||
      !onValidate(e.target.value)
    ) {
      onSetError(null);
      setValueFilled(false);
      setLabelClass(false);
      onSetRating("");
      setIfWasTouched(false);
    }
  }

  function handleChange(e) {
    onChange(e.target.value);
    if (requireValidator().validate(e.target.value)) {
      setValueFilled(true);
    } else {
      setValueFilled(false);
    }
  }

  return (
    <div className={classes["input-wrapper"]}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        onBlur={handleBlur}
      />
      <label className={labelClass ? classes["pop-up"] : ""}>{label}</label>
    </div>
  );
}

export default Input;
