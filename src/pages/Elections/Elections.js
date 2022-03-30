import { Typography, Container, Box, Button } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layout";
import Styles from "./elections.module.css";
export default function Elections() {
  document.title = "Elections 2022| TSG";
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
          {" "}
          Gymkhana Elections 2022
        </Typography>
        <Box className={Styles.electionBody}>
          <Typography variant="body2">
            Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries
            out election to select office bearers from students for smooth
            conduction of student related activities.
          </Typography>
          <Typography variant="body2">
            This year election campaign will be carried out in hybrid mode
            following COVID protocol. However, the nomination, approval and
            voting will be done using digital platform developed by ERP, IIT
            Kharagpur. The date for Gymkhana Election is as follows:
          </Typography>
          <Typography variant="body2">
            Date of Election: 4th April 2022 (Monday) <br />
            Time of Election: 9:00 am to 6:00 pm
            <br />
            Platform: ERP
          </Typography>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Relevant Documents:</Typography>
          <Box className={Styles.buttonGroup}>
            {" "}
            <Button>
              <a
                href="/media/files/Elections-Notification.pdf"
                alt="notification"
                target="_blank"
              >
                Notification
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/media/files/Election-Rules.pdf"
                alt="notification"
                target="_blank"
              >
                Rules
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/media/files/final-list_21-22.pdf"
                alt="notification"
                target="_blank"
              >
                Final List of Nominations
              </a>
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
