import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p> Sample Modal!</p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;