import { Link } from 'react-router-dom'
import "./CertifGen.css";
import Layout from "../../components/Layout";

import FileUpload from '../../components/CertificateGenerator/FileUpload';
import ControlledCarousel from "../../components/CertificateGenerator/ControlledCarousel";

const CertifGen = () => {

    document.title = "Certificate Generator | TSG"

    return (

        localStorage.getItem("authToken") ?
          (
        <Layout>
            <div className='certif-container'>
                {/* Logout Button */}
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div className='admin-title'>CERTIFICATE GENERATOR</div>
                </div>
                <ControlledCarousel />
                <FileUpload />
            </div>
        </Layout>
          ) : (
        <div className="login-screen">
           <h3 className="login-screen__title">Login</h3>
           <Link to="/login">Login</Link>
         </div>
          )
    );
}

export default CertifGen; 