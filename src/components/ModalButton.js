import React from "react";
let ModalButton = ({ block, color, id, text }) => (
  <button
    type="button"
    className={`btn ${block ? "btn-block" : ""} btn-${color}`}
    data-toggle="modal"
    data-target={`#${id}`}
  >
    {text}
  </button>
);
export default ModalButton;
