import React, { useEffect, useState, useRef } from "react";
import CoordinateMapping from "../../../components/NewAdmin/CoordinateMapping";
import "./UploadInterface.css";
import AdminLayout from "../../../components/AdminLayout";
import { Upload } from "react-bootstrap-icons";
import { Link, useHistory } from 'react-router-dom'; // Import useHistory

export default function UploadInterface() {
  const [templateName, setTemplateName] = useState("");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const history = useHistory(); // Get the history object

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

    // Navigate to the new page when a file is uploaded
    history.push("/newadmin/certifgen2/uploadtemplate/canvas");
  };

  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, so it only runs once after mounting

  return (
    <AdminLayout>
      {windowWidth > 1000 ? (
        // Template Form
        <div className="template-details">
          <div className="details">
            <div className="box">
              <label className="name" htmlFor="template-name">
                Template Name:
              </label>
              <input
                id="template-name"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </div>
            <button className="upload-btn">Upload Template</button>
          </div>
          {file == null ? (
            <>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button onClick={handleButtonClick} className="file-upload">
                <Upload className="upl" /> Upload png file
              </button>
            </>
          ) : (
            // Directly navigate to the new page when a file is uploaded
            <></>
          )}
        </div>
      ) : (
        // Laptop Access Message
        <div className="">Access this page using a laptop</div>
      )}
    </AdminLayout>
  );
}
