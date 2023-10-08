import React, { useState } from "react";
import "./LogsArea.css";
import Modal from "./Modal";
import data from "./eventdata.json";
import data2 from "./issuedata.json";

function LogsArea() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modaldata, setmodaldata]=useState(""); 
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  if (modalOpen) {
    document.body.classList.add("activemodal");
  } else {
    document.body.classList.remove("activemodal");
  }

  return (
    <>
      {modalOpen && 
      <Modal toggle={toggleModal}>
        {data2.GSOC.map((item) => (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.dateofissue}</li>
              <li class="end"></li>
            </ul>
          ))}
        </Modal>}
      <div className="viewlog">
        <div className="title">View Logs</div>
        <div className="credentials">
          <div className="text">Account:</div>
          <div className="email" >{data.email}</div>
          <div className="search" />
        </div>
        <div className="nameofdetails">
          <ul>
            <li>S.No</li>
            <li>Name of Event</li>
            <li>Date of Issue</li>
            <li>Name of users</li>
            <li>Number</li>
            <li>Actions</li>
          </ul>
        </div>
        <div className="valueofdetails">
          {data.IssuedCertificate.map((item) => (
            <ul key={item.id}>
              <li>{item.id}</li>
              <li>{item.nameofevent}</li>
              <li>{item.dateofissue}</li>
              <li>{item.nameofuser}</li>
              <li>{item.number}</li>
              <li>
                <button className="dropdown" onClick={toggleModal}>View Logs</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
export default LogsArea;