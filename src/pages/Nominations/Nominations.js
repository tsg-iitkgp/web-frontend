import { Typography, Container, Box, Button, CircularProgress } from "@material-ui/core";

import React, { useState } from "react";
import Styles from "./nominations.module.css";
import Layout from "../../components/Layouts/Layout";
export default function Nominations() {
  document.title = "Nominations 2025-2026 | TSG";

  const [currentTab, setCurrentTab] = useState(null);
  const [loading, setLoading] = useState(false);

  const tabFormUrls = {
    "Public Relations' Chairperson": "https://forms.gle/zbmqWn5DBc73rA8a7",
    "Technology Coordinators": "https://docs.google.com/forms/d/e/1FAIpQLScYUBiVw9YU_0pLtcE6Q3TRnIDe1hkawNNjwe2-Uk5kYYUNag/viewform?usp=header",
    "Editors": "https://forms.gle/ZbMfoG3k6NGFkHWJA",
    "Institute Girls' Sports Nominee": "https://docs.google.com/forms/d/e/1FAIpQLScYh3heOcACxbfWs0mSRkuWB2HYXNF88AjIO4k3vG1VghAllQ/viewform",
  };

  const handleTabChange = (s) => {
    setCurrentTab(s);
    setLoading(true); // Set loading to true when a new tab is selected
  };

  return (
    <Layout>
      <div className={Styles.electionHeaderImg}>
      </div>
      <Container className={Styles.electionsContainer}>
        <Typography
          variant="h4"
          style={{
            color: "#f1c40f",
            fontFamily: "Lato",
            fontWeight: "600",
            margin: "1rem 0",
          }}
          align="center"
        >
          Applications - Nominated Office Bearers (2025-2026)
        </Typography>

        <Box className={Styles.electionBody}>
          <Typography className={Styles.notice}>
            <Box className={Styles.buttonGroup}>
              {Object.keys(tabFormUrls).map((tab, index) => (
                <Button key={index} onClick={() => handleTabChange(tab)}>
                  <a>{tab}</a>
                </Button>
              ))}
            </Box>
          </Typography>
        </Box>

        <div>
          {currentTab ? (
            <>
              {loading && (
                <Box display="flex" justifyContent="center" alignItems="center" padding="2rem">
                  <CircularProgress />
                  <Typography variant="h6" className={Styles.loadingStateLabel}>
                    Loading...
                  </Typography>
                </Box>
              )}
              <iframe
                title={currentTab}
                src={tabFormUrls[currentTab]}
                onLoad={() => setLoading(false)}
                className={`${Styles.loadingStateLabel} ${Styles.googleForm}`}
                style={{ display: loading ? 'none' : 'block' }}
              >
                Loading…
              </iframe>
            </>
          ) : (
            <Typography variant="h6" align="center" className={Styles.loadingStateLabel}>
              Please select a position to view its nomination form
            </Typography>
          )}
        </div>
      </Container>
    </Layout>
  );
}
