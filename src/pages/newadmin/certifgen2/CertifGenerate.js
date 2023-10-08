import "./CertifGenerate.css";
import React from 'react';
import AdminLayout from '../../../components/AdminLayout';
import CertiTemplate from '../../../data/CertiTemplate.json';
import FileUpload from "../../../components/NewAdmin/FileUpload";
import { Link } from 'react-router-dom';


const certifGenerate = ()=>{
    document.title = "Certificate Generator | TSG";
    
    let selectedTemplate = 2;
    return (
        <AdminLayout>
            <div className="ceritifgenerator" style={{display:"flex",flexDirection:"column"}}>
                <h1 className='generatortitle'>GENERATE CERTIFICATES</h1>
                <Link to = "/newadmin/certifgen2/existingtemplates" className=
                'buttonlink'>
                    <p className='templatebutton'>Select template</p>
                </Link>
                {selectedTemplate!=null?
                (
                    <div id={selectedTemplate} className="selectedtemplate" style={{textAlign:"center"}}>
                        <div className="selectedcertif">
                            <img src={CertiTemplate.Templates[selectedTemplate].src} alt={CertiTemplate.Templates[selectedTemplate].alt} className="selectedcertif_image"/>
                            <p style={{color:"#5EA9FF" , fontSize:"24px" , fontWeight:"600"}}>{CertiTemplate.Templates[selectedTemplate].alt}</p>
                        </div>
                        <div className="exceltemplate">
                            <img src={CertiTemplate.Templates[selectedTemplate].preview} alt="" className="selectedcertif_excel"/>
                            <a href={`${CertiTemplate.Templates[selectedTemplate].download_link}`} download rel="noreferrer">
                                <i className="fa fa-download"></i>
                            </a>
                            <h1 className="excel_template">Excel Template</h1>
                        </div>
                        <FileUpload />
                    </div>
                ):
                (<></>)}
            </div>
        </AdminLayout>
    )
}

export default certifGenerate;