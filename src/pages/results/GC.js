import { useState } from "react";
// import Head from "next/head";
// import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "./pointsData";
import Chart from "./chart";
import './interiit.css'

const years = ["2018-19"];

export default function Sports() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2018-19");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <>
      <h2>
        <title>GC results</title>
      </h2>
      <section className="points content" style={{width: "100%", padding: "0"}}>
        <h2 style={{display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: "3%", alignItems: "center"}}> Points Tally General Championship {currentYear} </h2>

        <div className="tabs">
          <div className={`tab ${currentTab === "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            <button className="btn_interiit">Sports &amp; Games</button>
          </div>
          {/* <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div> */}
          <div className={`tab ${currentTab === "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
           <button className="btn_interiit"> Socult</button>
          </div>
        </div>
        <div className="select" style={{marginLeft: "40%"}}>
        <select value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        </div>

        <div className="chart">
          {currentTab === "sports" ? (
            <Chart 
              data={pointsData.sports}
              keys={[
                "Athletics",
                "Badminton",
                "Basketball",
                "Bridge",
                "Chess",
                "Cricket",
                "Football",
                "Hockey",
                "Squash",
                "Table Tennis",
                "Tennis",
                "Volleyball",
                "Weightlifting",
                "Swimming",
                "Waterpolo",
              ]}
              layout={"vertical"}
            />
          ) : (
            <Chart
              data={pointsData.socult}
              keys={[
                "Eastern Vocals",
                "Western Vocals",
                "Eastern Instrumentals",
                "Groups",
                "Western Instrumentals",
                "Sketching",
                "Cartooning",
                "Painting",
                "Thermocol and Clay Modelling",
                "Bengali Elocution",
                "Debate",
                "English Elocution",
                "Hindi Elocution",
                "WTGW",
                "Quiz",
                "Stage Play",
                "Choreography",
                "Street Play",
                "Short Film Making",
                "Dramatics Cup",
                "Entertainment Cup",
                "Fine Arts Cup",
                "Literary Cup",
              ]}
              layout={"vertical"}
            />
          )}
        </div>
      </section>
    </>
  );
}
