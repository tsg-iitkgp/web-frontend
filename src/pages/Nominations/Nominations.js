import { Typography, Container, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import Styles from "./nominations.module.css";
import Layout from "../../components/Layout";
export default function Nominations() {
  const [currentTab, setCurrentTab] = useState(null);

  const tabFormUrls = {
    "Public Relations' Chairperson": "https://docs.google.com/forms/d/e/1FAIpQLSfvoSEiHuU33zL_d9_wrs1hCk6ol_KjiWa_BkjAaAWYfgut_Q/viewform?embedded=true",
    "Technology Coordinator": "https://docs.google.com/forms/d/e/1FAIpQLScnLu0Vrb0oPBaSCA6SKf8CcP2O8eZGkKXLsVjMmj6zFJ4Yhg/viewform?embedded=true",
    "Editor": "https://docs.google.com/forms/d/e/1FAIpQLSc26msaYn79qlLxGRtlHM-xKHGUgmtKtBSBOjY0SHw5bYXZfA/viewform?embedded=true",
    "Institute Girl Sports' Nominee": "https://docs.google.com/forms/d/e/1FAIpQLSe9fvA24HmVoW3frHQtVg3QiAMQEqLSYOlrUyBAxCk5y7n6GA/viewform?embedded=tru",
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
          }}
          align="center"
        >
          Applications - Nominated Office Bearers (2023-24)
        </Typography>

        <div className="tabs">
          {Object.keys(tabFormUrls).map(tab => (
            <div
              key={tab}
              className={`tab ${currentTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn_interiit">{tab}</button>
            </div>
          ))}
        </div>

        <div>
          <iframe src={tabFormUrls[currentTab]} width="1200" height="1717" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </Container>
    </Layout >
  );
}
