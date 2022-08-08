import { Redirect } from 'react-router';
import "./CertifGen.css";
import Layout from "../../components/Layout";

import Logout from '../admin/Logout';
import FileUpload from '../../components/CertificateGenerator/FileUpload';
import ControlledCarousel from "../../components/CertificateGenerator/ControlledCarousel";
import { useState, useEffect } from 'react';
const jwt = require('jsonwebtoken');
const CertifGen = () => {

  document.title = "Certificate Generator | TSG"
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
      if (id !== null) {
          setStatus(true);
      }
  }, [id])
    const token = localStorage.getItem("authToken");
    const decodedToken = jwt.decode(token, { complete: true });
    const token_exp = decodedToken.payload.exp;
    if (token_exp * 1000 < Date.now()) {
      localStorage.clear();
      return (<Redirect to="/login" />);
    }

    return (

        localStorage.getItem("authToken") ?
          (
        <Layout>
            <div className='certif-container'>
                <Logout />
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div className='admin-title'>CERTIFICATE GENERATOR</div>
                </div>
                <ControlledCarousel setId={setId} />
                <FileUpload id={id} status={status} />
            </div>
        </Layout>
          ) : (
        <div className="login-screen">
           <h3 className="login-screen__title">Login</h3>
           <Redirect to="/login">Login</Redirect>
         </div>
          )
    );
}

export default CertifGen; 