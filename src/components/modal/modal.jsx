import { useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>toggle modal</button>
      {isVisible &&
        createPortal(<div>{children}</div>, document.getElementById("modal"))}
    </>
  );
};
