import React from "react";
import "./LiveScoreboard.css";

export default function SportsCard(props) {
    let sportsData= props.data
    
    return (
        <div className="sports-card" onClick={()=> {
            props.show();
        }
            }>
            <div className="sports-box">
                <div className="icon-div">
                    {/* <span style={ (sportsData.id === 6 || 7) ? {display: 'block'} : {}} className="live-status">{sportsData.status}</span> */}
                    <span className="live-status">{sportsData.status}</span>
                    <img src={sportsData.image} alt={sportsData.imgName} className="sport-img"/>
                    {/* <img src="/build/data/media/images/sportsIcons/athelics.png" alt="no_img" /> */}
                    <h4 className="sport-name">{sportsData.name}</h4>
                </div >
            </div>
        </div>
    );
}
