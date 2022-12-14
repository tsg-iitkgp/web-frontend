import axios from "axios";
import { useState } from "react";
import "./interiit.css";
import "./LiveScoreboard.css";
import Athletics from "./Scorecards/Athletics";
import Badminton from "./Scorecards/Badminton";
import Basketball from "./Scorecards/Basketball";
import Chess from "./Scorecards/Chess";
import Cricket from "./Scorecards/Cricket";
import Football from "./Scorecards/Football";
import Hockey from "./Scorecards/Hockey";
import Squash from "./Scorecards/Squash";
import Tabletennis from "./Scorecards/Tabletennis";
import Tennis from "./Scorecards/Tennis";
import Volleyball from "./Scorecards/Volleyball";
import Weightlifting from "./Scorecards/Weightlifting";
import SportsCard from "./SportsCard";

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("Sports");
  const [title, setTitle] = useState(null);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(null);
  const [url, setUrl] = useState(null);

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  const fetchData=(item)=>{
    // console.log("fetched");
    axios.get(item.url)
    .then((responseData)=>{
        // console.log(responseData);
        let score = responseData.data;
        // console.log(`This is score ${score.data}`);
        setData(score.data);
    })
    .then((response) => {
      setHeading(item.name);
      setShow(true);
    })
  }

  const sportsData = [
    {
      id: 1,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/athelics.png?raw=true",
      url: 'https://script.google.com/a/yahoo.com/macros/s/AKfycbyAhfcEuvjDl7_69PQd0fShVSPOkyQU7yDr-yRWC4aFcVOmqvIouIj6rJJIJ5nhHIEQig/exec',
      name: "Athletics",
      imgName: "Athletics",
      status: ""
    },
    {
      id: 2,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/badminton.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbyGklcyuEG72MaqDKtn4JDh8pH_ykDvcRLwXYIZjd9IcfJ0LpIoVqvSnKdGW8WQTDhv/exec",
      name: "Badminton",
      imgName: "Badminton",
      status: ""
    },
    {
      id: 3,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/basketball.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbzPijB8-d4Vv-U7sNUkdnGwjAMvd1evieVtf0JfDFRNGsmrMQIJDr9Ny29NE_wUsuG9/exec",
      name: "Basketball",
      imgName: "Basketball",
      status: ""
    },
    {
      id: 4,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/chess.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycby6nQiJZGLstStQyLoSD03z9MJTJuGBdZ6RbLMojv0gKqEdoWR2tBPFIxwalJqzci-k/exec",
      name: "Chess",
      imgName: "Chess",
      status: ""
    },
    {
      id: 5,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/cricket.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbwmGVHLQ0V8Nb1oFCKr3a0ONDZI6lVg5FbGPOH-26YhCr7-vY1Q2pxoCvxnaO8JHy1BXw/exec",
      name: "Cricket",
      imgName: "Cricket",
      status: ""
    },
    {
      id: 6,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/football.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbw0zHXFH9IesuvoFMl-2VLzCDbl4WAZQMpQNK1U9VI32xZEvd2tv2d3z_47D9hxCSnVEg/exec",
      name: "Football",
      imgName: "Football",
      status: "LIVE"
    },
    {
      id: 7,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/hockey.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbwhwtrK1WF2qmszsnewXsT-vJ6_s4jWh3s_3SI63QXqlNxrsEK1NfWVqDzOmpA9VPVY/exec",
      name: "Hockey",
      imgName: "Hockey",
      status: "LIVE"
    },
    {
      id: 8,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/squash.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbxPQ304HXVJVqZ0qYYKQl1_0gDXfS3z8lPqWY7QC94NcbqFMHZTcFvgo5gEdbhTSh9k/exec",
      name: "Squash",
      imgName: "Squash",
      status: ""
    },
    {
      id: 9,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/table-tennis.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbz04vdg1-zBky-XzaFw0w_aFwpurxsMR1fKA29ZSXjOBYC_EQI6bG1DMFkwuL89mZbgsw/exec",
      name: "Table Tennis",
      imgName: "Table Tennis",
      status: ""
    },
    {
      id: 10,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/tennis.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbzevYYUDnyHXX48k7tqFDd3uMPJ_2SRs-OCBW3m-nntW83SzW7qhboXLVZ7bGG15KnF/exec",
      name: "Tennis",
      imgName: "Tennis",
      status: ""
    },
    {
      id: 11,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/volleyball.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbxxis760kyFDwNrQaus72_hYracM0GuBw4Ww1NJNKf4a3PZFAoFDAY-fxtyUfzSA0TgEQ/exec",
      name: "Volleyball",
      imgName: "Volleyball",
      status: ""
    },
    {
      id: 12,
      image: "https://github.com/tsg-iitkgp/web-frontend/blob/main/public/data/media/images/sportsIcons/weightlifting.png?raw=true",
      url: "https://script.google.com/macros/s/AKfycbx_cxvBKuJlRo3RRNRIFfjwTl5jiYx0IZRDJ4YUPVNZJBslM-V-nM-eAEKusOvoLNGt7g/exec",
      name: "Weight Lifting",
      imgName: "Weight Lifting",
      status: ""
    },
  ]

  return (
    <>
      <h1>Live Scoreboard</h1>
      {heading==='Athletics' && <Athletics show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Badminton' && <Badminton show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Basketball' && <Basketball show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Chess' && <Chess show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Cricket' && <Cricket show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Football' && <Football show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Hockey' && <Hockey show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Squash' && <Squash show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Table Tennis' && <Tabletennis show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Tennis' && <Tennis show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Volleyball' && <Volleyball show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}
      {heading==='Weight Lifting' && <Weightlifting show={show} data={data} heading={heading} disable={() => setShow(false)} url={url} />}

      <div className="tabs">
        <div
          className={`tab ${currentTab === "InterIIT" ? "active" : ""}`}
          onClick={() => {
            handleTabChange("InterIIT");
            setTitle("Sports and Games");
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className="btn_interiit">Inter IIT - SPORTS 2022-23</button>
        </div>

        <div
          className={`tab ${currentTab === "GC" ? "active" : ""}`}
          onClick={() => handleTabChange("GC")}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className="btn_interiit">General Championship</button>
        </div>
      </div>

      {/* {currentTab === "InterIIT" && (
        <>
          <h2 className="top-heading">Sports and Games</h2> 
          <div className="tabs">
            <div
              className={`tab ${currentTab === "SnGInterIIT" ? "active" : ""}`}
              onClick={() => {
                handleTabChange("SnGInterIIT");
                setTitle("Sports and Games");
              }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn_interiit">Sports & Games</button>
            </div>
            <div
              className={`tab ${currentTab === "TechInterIIT" ? "active" : ""}`}
              onClick={() => {
                handleTabChange("TechInterIIT");
                setTitle("Tech")
              }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn_interiit">Tech</button>
            </div>
            <div
              className={`tab ${currentTab === "SocultInterIIT" ? "active" : ""}`}
              onClick={() => {
                handleTabChange("SocultInterIIT");
                setTitle("SoCult");
              }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn_interiit">SoCult</button>
            </div>

          </div>
        </>
      )} 
      {currentTab === "GC" && (
        <>
          <h2 className="top-heading">Sports and Games GC</h2> 

        </>
      )} */}
      {title === "Sports and Games" && (
        <>
          <h1 style={{ color: "#F1C40F" }}>{title}</h1>
          <div data-aos="zoom-in-down" className="sport-cards">
            <div className="each-sport">
              <div className="sports-container" >
                {sportsData.map((item, index) => (
                  <SportsCard key={index} data={item} show={() => {
                    fetchData(item);
                    setUrl(item.url);
                  }} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
