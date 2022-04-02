import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Styles from "./opportunities.module.css";

export default function OpportunityPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [internshipsData, setInternshipsData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyaYp-jMSpGXrYjD0u7CmHmEINCh6xLO8nGbouAebDuJ7qex3CzfiMMaufp4HgK3gw/exec?sheetName=Opportunities"
    )
      .then((response) => response.json())
      .then((responseData) => {
        setInternshipsData(responseData.data.data);
        console.log(responseData.data.data);
        setIsLoading(false);
      });
  }, []);
  let internship = internshipsData[id];
  return (
    <Layout>
      <Container style={{ marginTop: "14vh", minHeight: "80vh" }}>
        {isLoading ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <CircularProgress style={{ color: "gold" }} />
          </div>
        ) : (
          <Box>
            <Typography
              variant="h4"
              style={{
                color: "#f1c40f",
                fontFamily: "Lato",
                fontWeight: "500",
              }}
              align="center"
            >
              {internship[1] + " Internship"}
            </Typography>
            <Box style={{ marginTop: "1rem" }}>
              <Typography
                variant="h4"
                align="left"
                component="h6"
                style={{
                  color: "hsl(207, 70%, 71%)",
                  fontFamily: "lato",
                  marginTop: "1rem",
                }}
              >
                {internship[0]}
                <Button className={Styles.apply}>
                  <a href={internship[7]} target="_blank" rel="noreferrer">
                    Apply
                  </a>
                </Button>
              </Typography>
              <Typography className={Styles.internshipDetails}>
                {internship[4].split("\n").map((item) => (
                  <p>{item}</p>
                ))}
                <Typography variant="h5">
                  Deadline:{" "}
                  <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                    {internship[6]}
                  </span>
                </Typography>
                <Typography variant="h5">
                  How to Apply ?{" "}
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {internship[5].split("\n").map((item) => (
                      <p>{item}</p>
                    ))}
                  </span>
                </Typography>
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Layout>
  );
}
