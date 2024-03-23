import { Typography, Container } from "@material-ui/core";
import React, { useState } from "react";
import Styles from "./nominations.module.css";
import Layout from "../../components/Layouts/Layout";
export default function Nominations() {
  document.title = "Nominations 2024-2025 | TSG";

  const [currentTab, setCurrentTab] = useState(null);

  const tabFormUrls = {
    "Public Relations' Chairperson":
      "https://forms.gle/xfKYEfavCnthN2Aj7",
    "Technology Coordinators":
      "https://forms.gle/h1BWG1DKGDGt4zQW7",
    "Editor":
      "https://forms.gle/CFBc8UhAcCLa1vi86",
    "Institute Girls' Sports Nominee":
      "https://forms.gle/DNtiJXFY3z42qrrx7",
  };

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Container className={Styles.electionsContainer}>
        <Typography
          variant="h4"
          style={{
            color: "#f1c40f",
            fontFamily: "Lato",
            fontWeight: "600",
            margin: "1rem 0"
          }}
          align="center"
        >
          Applications - Nominated Office Bearers (2024-2025)
        </Typography>

        <div className="tabs" style={{ display: "flex", justifyContent: "space-between", margin: "1rem auto", width: "60%", textAlign: "center", alignItems: "center" }}>
          {Object.keys(tabFormUrls).map((tab, index) => (
            <div
              key={tab}
              id={`tab-${index}`}
              className={`nomination-tab tab ${currentTab === tab ? "active" : ""}`}
              style={{ width: "20%", textAlign: "center" }}
              onClick={() => handleTabChange(tab)}
            >
              <button className="btn btn-warning">{tab}</button>
            </div>
          ))}
        </div>

        <div>
          <iframe
            title={currentTab}
            src={tabFormUrls[currentTab]}
            width="1200"
            height="1717"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </Container>
    </Layout>
  );
}
