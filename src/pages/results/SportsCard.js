import React from "react";
import "./LiveScoreboard.css";

export default function SportsCard(props) {
  let sportsData = props.data;

  return <div className="sports-card">
    <div className="sports-card-content">
      <div className="sports-card-image">
        <img src={sportsData.image} alt="" className="sport-img" />
      </div>
      <div className="sports-card-info">
        <div className="sports-card-info-title">
          <h3 >{sportsData.name}</h3>
          {sportsData.status === "LIVE" && <h4> Live</h4>}
        </div>
      </div>
    </div>
  </div>
}
