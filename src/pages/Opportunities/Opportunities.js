import {
  Container,
  Typography,
  Box,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import Styles from "./opportunities.module.css";

export default function Opportunities() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [internshipsData, setInternshipsData] = useState([]);

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
  const handleClick = (index) => {
    history.push(`/opportunities/${index}`);
  };

  return (
    <Layout>
      <Container className={Styles.opportunitiesContainer}>
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
          Opportunities
        </Typography>
        <Box className={Styles.contact}>
          <Typography variant="body2" className={Styles.contactDetails}>
            For any queries contact: &nbsp;{" "}
            <a href="mailto:iitkgp.pr@gmail.com">Sarthak Goyal</a> &nbsp;{" "}
            <a href="tel:+917584837111">(7584837111)</a>
          </Typography>
          <TableContainer>
            {isLoading ? (
              <LinearProgress style={{ backgroundColor: "gold" }} />
            ) : (
              <Table>
                <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                  <TableRow>
                    {[
                      "Organisation",
                      "Category",
                      "Profile",
                      "Description",
                      "Deadline",
                    ].map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Lato",
                        }}
                        key={head}
                        align="center"
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {internshipsData &&
                    internshipsData.map((internship, index) => {
                      return (
                        <TableRow
                          onClick={() => handleClick(index)}
                          key={index}
                          style={{
                            backgroundColor: "rgba(255,255,255,0.6)",
                            cursor: "pointer",
                            fontFamily: "Lato",
                            "&:hover": {
                              backgroundColor: "#131111",
                            },
                          }}
                        >
                          <TableCell align="center">{internship[0]}</TableCell>
                          <TableCell align="right">{internship[2]}</TableCell>
                          <TableCell align="right">{internship[1]}</TableCell>
                          <TableCell
                            align="right"
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              textAlign: "center",
                            }}
                          >
                            {" "}
                            {internship[3].split("\n").map((item) => (
                              <p>{item}</p>
                            ))}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ textALign: "center" }}
                          >
                            {internship[6]}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  );
}
