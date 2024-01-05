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
import AthleticsMatch from "./Scorecards/GC_Cards/AthleticsMatch";
import BadmintonMatch from "./Scorecards/GC_Cards/BadmintonMatch";
import BasketballMatch from "./Scorecards/GC_Cards/BasketballMatch";
import CricketMatch from "./Scorecards/GC_Cards/CricketMatch";
import FootballMatch from "./Scorecards/GC_Cards/FootballMatch";
import HockeyMatch from "./Scorecards/GC_Cards/HockeyMatch";
import SquashMatch from "./Scorecards/GC_Cards/SquashMatch";
import TabletennisMatch from "./Scorecards/GC_Cards/TabletennisMatch";
import TennisMatch from "./Scorecards/GC_Cards/TennisMatch";
import VolleyballMatch from "./Scorecards/GC_Cards/VolleyballMatch";
import Hockey from "./Scorecards/Hockey";
import Squash from "./Scorecards/Squash";
import Tabletennis from "./Scorecards/Tabletennis";
import Tennis from "./Scorecards/Tennis";
import Volleyball from "./Scorecards/Volleyball";
import Weightlifting from "./Scorecards/Weightlifting";
import SportsCard from "./SportsCard";
import sportsData from './sportsData.json';

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("GC");
  const [title, setTitle] = useState("Sports and Games");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  const fetchData = (item) => {
    if(currentTab==="InterIIT"){
      axios.get(item.url)
        .then((responseData) => {
          let score = responseData.data;
          setData(score.data);
        })
        .then((response) => {
          setHeading(item.name);
          setShow(true);
          setNumber(0);
        })
    }
    else{
      axios.get(item.gc_url)
        .then((responseData) => {
          let score = responseData.data;
          setData(score.data);
        })
        .then((response) => {
          setHeading(item.name);
          setShow(true);
          setNumber(0);
        })
    }
  }

  return (
    <>
      <h1>Live Scoreboard</h1>
      {heading === 'Athletics' && currentTab==="InterIIT" && <Athletics show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Badminton' && currentTab==="InterIIT" && <Badminton show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Basketball' && currentTab==="InterIIT" && <Basketball show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Chess' && currentTab==="InterIIT" && <Chess show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Cricket' && currentTab==="InterIIT" && <Cricket show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Football' && currentTab==="InterIIT" && <Football show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Hockey' && currentTab==="InterIIT" && <Hockey show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Squash' && currentTab==="InterIIT" && <Squash show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Table Tennis' && currentTab==="InterIIT" && <Tabletennis show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Tennis' && currentTab==="InterIIT" && <Tennis show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Volleyball' && currentTab==="InterIIT" && <Volleyball show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Weight Lifting' && currentTab==="InterIIT" && <Weightlifting show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Athletics' && currentTab==="GC" && <AthleticsMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Badminton' && currentTab==="GC" && <BadmintonMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Basketball' && currentTab==="GC" && <BasketballMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Chess' && currentTab==="GC" && <BasketballMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Cricket' && currentTab==="GC" && <CricketMatch hasBegin= {true} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Football' && currentTab==="GC" && <FootballMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Hockey' && currentTab==="GC" && <HockeyMatch hasBegin= {true} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Squash' && currentTab==="GC" && <SquashMatch hasBegin= {true} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Table Tennis' && currentTab==="GC" && <TabletennisMatch hasBegin= {true} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Tennis' && currentTab==="GC" && <TennisMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Volleyball' && currentTab==="GC" && <VolleyballMatch hasBegin= {true} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}
      {heading === 'Weight Lifting' && currentTab==="GC" && <VolleyballMatch hasBegin= {false} show={show} data={data} heading={heading} disable={() => { setShow(false); setLoading(false) }} url={url} />}



      <div className="tabs">
        <div
          className={`tab ${currentTab === "GC" ? "activeTab" : ""}`}
          onClick={() => {
            handleTabChange("GC");
            setTitle("Sports and Games");
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className="btn_interiit" id={`${currentTab === "GC" ? "activeTab" : ""}`} >General Championship</button>
        </div>
        <div
          className={`tab ${currentTab === "InterIIT" ? "activeTab" : ""}`}
          onClick={() => {
            handleTabChange("InterIIT");
            setTitle("Sports and Games");
          }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button className="btn_interiit" id={`${currentTab === "InterIIT" ? "activeTab" : ""}`} >Inter IIT - SPORTS 2022-23</button>
        </div>
      </div>

      {currentTab==="InterIIT" && title === "Sports and Games" && (
        <>
          <h1 style={{ color: "#F1C40F" }}>{title}</h1>
          <div data-aos="zoom-in-down" className="sport-cards">
            <div className="each-sport">
              <div className="sports-container" >
                {sportsData.map((item, index) => (
                  <SportsCard key={index} data={item} number={number} loading={loading} show={() => {
                    fetchData(item);
                    setUrl(item.url);
                    setNumber(index + 1);
                    setLoading(true);
                  }} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {currentTab==="GC" && title === "Sports and Games" && (
        <>
          <h1 style={{ color: "#F1C40F" }}>{title}</h1>
          <div data-aos="zoom-in-down" className="sport-cards">
            <div className="each-sport">
              <div className="sports-container" >
                {sportsData.map((item, index) => (
                  <SportsCard key={index} data={item} number={number} loading={loading} show={() => {
                    fetchData(item);
                    setUrl(item.gc_url);
                    setNumber(index + 1);
                    setLoading(true);
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
