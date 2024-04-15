import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IITKGPLogo from "../../images/IIT_Kharagpur_Logo.png";
import Trail from "../../images/WebsiteHackathon.jpg";
import "./ViewCertificate.css";
import Popper from "./Popper";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

//https://gymkhana.iitkgp.ac.in/certifgen/view/NjYxYWFlOGM4ZjU0NTJjZmNlM2IxZjIx
const ViewCertificate = () => {
  document.title = "Certificate | TSG";

  const params = useParams();
  //  console.log(params.id);
  const [certificateImage, setCertificateImage] = useState("");
  const [certifData, setCertifData] = useState({});

  useEffect(() => {
    const getCertifData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5050/api/certifgen/generateCertif/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch certificate data");
        }
        const data = await response.json();
        console.log(data);
        setCertifData(data);
        setCertificateImage(data.certificate);
      } catch (error) {
        console.error("Error fetching certificate data:", error);
      }
    };

    getCertifData();
  }, []);

  const downloadImage = () => {
    // Create a Blob from the base64 encoded image
    const byteCharacters = atob(certificateImage.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });

    // Create a download link and trigger the download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "certificate.png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const downloadPdf = () => {
  //     const pdf = new jsPDF('p', 'mm', 'a4');

  //     // Calculate the dimensions of the image relative to the page size
  //     const pageWidth = pdf.internal.pageSize.getWidth();
  //     const pageHeight = pdf.internal.pageSize.getHeight();

  //     // Load the image to get its natural width and height
  // const img = new Image();
  // img.src = certificateImage;
  //     img.onload = () => {
  //         const imgWidth = pageWidth;
  //         const imgHeight = (pageWidth * img.naturalHeight) / img.naturalWidth;

  //         // Add the image to the PDF
  //         pdf.addImage(certificateImage, 'JPEG', 0, 0, imgWidth, imgHeight);

  //         // Save the PDF
  //         pdf.save('certificate.pdf');
  //     };
  // };
  const downloadPdf = () => {
    const img = new Image();
    img.onload = () => {
      const pdf = new jsPDF("p", "pt", [img.width, img.height]);
      // Set the width of the image to match the width of the PDF page
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (img.height * imgWidth) / img.width;

      // Add the image to the PDF
      pdf.addImage(img, "JPEG", 0, 0, imgWidth, img.height);

      // Save the PDF
      pdf.save("certificate.pdf");
    };
    img.src = certificateImage;
  };

  return (
    <div className="certifpreview" style={{ maxHeight: "100%" }}>
      <a href="/"
        className="certifpreview_nav"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          justifyContent: "center",
          gap: "0.75rem",
          margin: "2rem auto",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        <img
          src="/data/media/images/general/gymkhanaLogo.png"
          alt="gymk_logo"
          className="gymk_logo"
        />
        <div style={{textAlign: "centre"}}>
          <h1>Technology Students' Gymkhana</h1>
          <h2 style={{color: "white"}}>Indian Institute of Technology Kharagpur</h2>
        </div>
      </a>
      <div
        className="certifpreview_body"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80vw",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "auto" }}>CERTIFICATE</h1>
        <h1
          style={{
            fontSize: "1.5rem",
            margin: "0.5rem auto 2rem",
            color: "white",
            // border: "1px solid white",
            padding: "10px 20px",
            textDecoration: "underline",
          }}
        >
          {certifData.eventName}
        </h1>
        <div className="certificateimage">
          <div
            className="download_btns"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "1.25rem 0",
            }}
          >
            <button className="downloadBtn" onClick={downloadImage}>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              Download as Image
            </button>
            {/* <button className="downloadBtn" onClick={downloadPdf}>
              <i
                className="fa fa-file-pdf-o"
                aria-hidden="true"
              ></i>
              Download as Pdf
            </button> */}
          </div>
        </div>
        <img src={certificateImage} alt="Certificate" />
        {/* <div className='certifpreview_share'>
                    <p className='certifshare_text'>Share it on:</p>
                    <div className='certifshare_links'>
                        <a href="#" className='certifshare_link'><i class="fa fa-facebook"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-twitter"></i></a>
                        <a href="#" className='certifshare_link'><i class="fa fa-instagram"></i></a>
                        <a href="#"className='certifshare_link'><i class="fa fa-linkedin"></i></a>
                    </div>
                </div> */}
      </div>
      <Popper />
    </div>
  );
};

export default ViewCertificate;
