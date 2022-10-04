import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children, wrapperId = "modal" }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let el = document.getElementById(wrapperId);

    let appendedToDom = false;

    if (!el) {
      const wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", wrapperId);
      document.body.appendChild(wrapperElement);
      el = wrapperElement;
      appendedToDom = true;
    }

    setWrapperElement(el);

    return () => {
      if (appendedToDom && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default Modal;
