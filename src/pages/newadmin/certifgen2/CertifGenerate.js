import "./CertifGenerate.css";
import React from 'react';
import AdminLayout from '../../../components/AdminLayout';
import { Link } from 'react-router-dom';


const certifGenerate = ()=>{
    
    document.title = "Certificate Generator | TSG";
    
    return (
        <AdminLayout>
            <div className="ceritifgenerator">
                <h1 className='generatortitle'>GENERATE CERTIFICATES</h1>
                <Link to = "/newadmin/certifgen2/existingtemplates" className=
                'buttonlink'>
                    <p className='templatebutton'>Select template</p>
                </Link>
            </div>
        </AdminLayout>
    )
}

export default certifGenerate;