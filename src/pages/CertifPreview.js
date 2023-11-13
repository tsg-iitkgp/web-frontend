import React from 'react';
import IITKGPLogo from "../images/IIT_Kharagpur_Logo.png";
import Trail from "../images/WebsiteHackathon.jpg";
import './CertifPreview.css';

const CertifPreview = () =>{
    return(
        <div className='certifpreview' style={{maxHeight:"100%"}}>
            <div className='certifpreview_nav' style={{display:"flex",alignItems:"center",width:"100vw",justifyContent:"center",gap:"0.75rem"}}>
                <img src="/data/media/images/general/gymkhanaLogo.png" alt="gymk_logo" className='gymk_logo'/>
                <h1>Technology Students' Gymkhana</h1>
                <img src={IITKGPLogo} alt="Kgp_logo" className='kgp_logo'/>
            </div>
            <div className='certifpreview_body' style={{display:"flex",flexDirection:"column",alignItems:"center",width:"80vw",margin:"0 auto"}}>
                <h1 style={{fontSize:"1.75rem"}}>Event Name</h1>
                <p style={{color:"white",fontSize:"1.75rem"}}>Certificate type</p>
                <p style={{color:"white",fontSize:"1.1rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec fringilla sem. Mauris fringilla, diam sit amet cursus consectetur, est quam vehicula turpis, in faucibus diam justo feugiat turpis. Nunc ac suscipit mauris. Quisque nec tempus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra mauris tortor, in convallis augue ultrices a. Nam ac consectetur nunc. Nulla sed risus turpis. Nam tempus pharetra lacus, ut sollicitudin felis dapibus in. Vestibulum tristique tortor sit amet urna tincidunt porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
                <div className='certificateimage'>
                    <img src={Trail} alt="Certificate"/>
                    <div className='download_btns' style={{display:"flex",justifyContent:"space-between",padding:"1rem 0"}}>
                        <button className='downloadBtn'><i class="fa fa-picture-o" aria-hidden="true"></i>Download as Image</button>
                        <button className='downloadBtn'><i class="fa fa-file-pdf-o" aria-hidden="true"></i>Download as Pdf</button>
                    </div>
                </div>
                <div className='certifpreview_share'>
                    <p className='certifshare_text'>Share it on:</p>
                    <div className='certifshare_links'>
                        <a href="#" className='certifshare_link'><i class="fa fa-facebook"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-twitter"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-instagram"></i></a>
                        <a href="#"className='certifshare_link'><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertifPreview;