import { Typography, Container, Box, Button } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layout";
import Styles from "./elections.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
import { Link } from "react-router-dom";
export default function Elections() {
  document.title = "Elections 2023 | TSG";
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
          Gymkhana Elections 2023
        </Typography>
        <Box className={Styles.electionBody}>
          <Typography variant="body2">
            Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries
            out election to select office bearers from students for smooth
            conduction of student related activities.
          </Typography>
          <Typography variant="body2">
            The nomination, approval and
            voting will be done using digital platform developed by ERP, IIT
            Kharagpur. The date for Gymkhana Election is as follows:
          </Typography>
          <Typography variant="body2">
            Date of Election: 4th April 2023 (Tuesday) <br />
            Time of Election: 9:00 am to 6:00 pm
            <br />
            Platform: ERP
          </Typography>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Notices:</Typography>
          <Box className={Styles.notices}>
            <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                TSG Election (2023-24) Notification
              </div>
              <Button>
                <a
                  href="/data/media/files/Election_2023-24.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Schedule and Rules &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                The date for submission of Revised Proposals the posts of Vice
                President and General Secretaries is extended upto 10:00 am on
                March 29, 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/Extension-Final-Proposal_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAP has been scheduled on 1st and 2nd of April 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/SOAP_Schedule_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            {/* <Button>
              <Link to="/elections/candidates">Candidates And Proposals</Link>
            </Button> */}
          </Box>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Relevant Documents:</Typography>
          <Box className={Styles.buttonGroup}>
            {" "}
            <Button>
              <a
                href="/data/media/files/Elections-Notification.pdf"
                alt="notification"
                target="_blank"
              >
                Notification
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/data/media/files/Election-Rules.pdf"
                alt="notification"
                target="_blank"
              >
                Rules
              </a>
            </Button>
            {/* <Button>
              {" "}
              <a
                href="/data/media/files/final-list_21-22.pdf"
                alt="notification"
                target="_blank"
              >
                Final List of Nominations
              </a>
            </Button> */}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
