import React from "react";
let Modal = ({ id, title, content }) => (
  <div className="fade modal text-dark" id={id} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id={`${id}Label`}>
            {title}
          </h5>
          <button type="button" className="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-dark" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default Modal;
