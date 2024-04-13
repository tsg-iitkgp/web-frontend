import React, { useState } from "react";
import "./Modal.css";

function Modal({ toggle,children }) {
  return (
    <>
      <div className="overlay" onClick={toggle}>
        <div class="cross" >&#215;</div>
        <div className="modal">
          <div className="expandname">
            <ul>
              <li>Name</li>
              <li>Roll No.</li>
              <li>Recepient's Email</li>
              <li>Date of issue</li>
              <li className="end">Status</li>
            </ul>
          </div>
          <div className="expanddetails">{children}
          {/* <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li class="end"></li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;