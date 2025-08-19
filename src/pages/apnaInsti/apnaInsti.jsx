import React, { useEffect, useState } from "react";
import "./apnaInsti.css";
import bgImage from "./website.png";

export default function ApnaInstiPage() {
  const [imageHeight, setImageHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.height / img.width;
        const calculatedHeight = window.innerWidth * aspectRatio;
        setImageHeight(`${calculatedHeight}px`);
      };
      img.src = bgImage;
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    window.addEventListener("orientationchange", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
      window.removeEventListener("orientationchange", calculateHeight);
    };
  }, []);

  const handleDownload = () => {
    // Replace with actual APK download URL
    const apkUrl = "https://d39x976q8ms3rx.cloudfront.net/ApnaInsti%20-%20The%20%27One%20App%20For%20KGP%27.apk "; // Update this with the actual APK file path
    const a = document.createElement("a");
    a.href = apkUrl;
    a.download = "ApnaInsti.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Get responsive button styles based on screen size
  const getButtonStyles = () => {
    const isSmallScreen = window.innerWidth < 768;
    return {
      position: "absolute",
      top: "85%",
      left: "47%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#2b6af0",
      color: "white",
      border: "none",
      borderRadius: isSmallScreen ? "8px" : "8px",
      padding: isSmallScreen ? "15px 30px" : "50px 100px",
      fontSize: isSmallScreen ? "16px" : "30px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(43, 106, 240, 0.3)",
      transition: "all 0.3s ease",
      zIndex: 10,
      maxWidth: "90vw",
      textAlign: "center",
    };
  };

  const [buttonStyles, setButtonStyles] = useState(getButtonStyles());

  useEffect(() => {
    const handleResize = () => {
      setButtonStyles(getButtonStyles());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <div
        style={{
          width: "100vw",
          height: imageHeight,
          background: `url(${bgImage}) top center / cover no-repeat`,
          backgroundSize: "100% auto",
          backgroundColor: "#4A90E2",
          overflowX: "hidden",
          margin: 0,
          padding: 0,
          position: "relative",
        }}
      >
        {/* Download Button */}
        <button
          onClick={handleDownload}
          style={buttonStyles}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1e5ad1";
            e.target.style.transform = "translate(-50%, -50%) translateY(-2px)";
            e.target.style.boxShadow = "0 6px 16px rgba(43, 106, 240, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2b6af0";
            e.target.style.transform = "translate(-50%, -50%)";
            e.target.style.boxShadow = "0 4px 12px rgba(43, 106, 240, 0.3)";
          }}
        >
          Download APK
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          width: "100vw",
          backgroundColor: "#2b6af0",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <span>
            Daksh Yadav:{" "}
            <a
              href="tel:8795675974"
              style={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              8795675974
            </a>
          </span>
          <span>
            Devansh Soni:{" "}
            <a
              href="tel:7999892181"
              style={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              7999892181
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export const ApnaInsti = ApnaInstiPage;