import "./CertifGen2.css";
import React from 'react';
import AdminLayout from "../../../components/AdminLayout";
import { Link } from 'react-router-dom';

const CertifGen2 = () => {

  document.title = "Certificate Generator | TSG";

  return (
    <AdminLayout>
      <div className="certifgenHome">
        <div className="adminLogo">
          <img className="adminPic" src = "/data/media/images/general/gymkhanaLogo-black.png" alt="profile-pic" />
        </div>
        <div className="admintitle">
          <h1 className="certiftitle">CERTIFICATE GENERATOR</h1>
        </div>
        <div className="certifGenOptions">
          <Link to = "/newadmin/certifgen2/certifgenerate" className="buttonlink">
            <div className="optionButton">
              <img className="optionPic" src = "/data/media/images/adminphotos/Generate.png" alt="profile-pic" />
              <p className="optionName">Generate</p>
            </div>
          </Link>
          <Link to = "/newadmin/certifgen2/certiflogs" className="buttonlink">
            <div className="optionButton">
              <img className="optionPic" src = "/data/media/images/adminphotos/ViewLogs.png" alt="profile-pic" />
              <p className="optionName">View Logs</p>
            </div>
          </Link>
        </div> 
      </div>
    </AdminLayout>
  );
}

export default CertifGen2; 