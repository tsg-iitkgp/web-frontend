import "../Scorecard.css";
import Styles from "../../../../styles/components/GC_Live/basketball.module.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function BasketballMatch(props) {

    var temp = null;
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');

    const fetchdata = (url) => {
        axios.get(url)
            .then((response) => {
                let score = response.data;
                // // // console.log(`This is score ${score.data}`);
                temp = score.data;
            })
            .then((responseData) => {
                // // console.log("fetched again");
                setData(temp);
                setStyle('fa fa-refresh fa-2x');
                // console.log(style);
                temp = null;
            })
    }
    if (props.hasBegin === true) {
        if (props.show === true && data === null) {
            return (
                <>
                    <div className="popup" >
                        <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                            <div className="popup-heading">
                                <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                                    <i className={style} aria-hidden="true"></i>
                                </div>
                                <div className="props-title">
                                    {props.heading}
                                </div>
                                <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                </div>
                            </div>
                            <hr />
                            <div className="popup-content">
                                <div className="popup-content text">
                                    {props.data.map((val, index) => {
                                        return (<>
                                            <div className={Styles.cardContainer}>
                                                <div className={Styles.header}>
                                                    {val.time}, {val.location}
                                                </div>
                                                <div className={Styles.body}>
                                                    <div className={Styles.eachTeamContainer}>
                                                        <div className={Styles.eachTeam}>
                                                            {val.team1}
                                                        </div>
                                                    </div>
                                                    <div className={Styles.vs}>
                                                        vs
                                                    </div>
                                                    <div className={Styles.eachTeamContainer}>
                                                        <div className={Styles.eachTeam}>
                                                            {val.team2}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.footer}>
                                                    <div>
                                                        {val.highlight_line}
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-1
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q1_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q1_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-2
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q2_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q2_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-3
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q3_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q3_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-4
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q4_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q4_score}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else if (props.show === true && data !== null) {
            // console.log(data);
            return (
                <>
                    <div className="popup" >
                        <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                            <div className="popup-heading">
                                <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                                    <i className={style} aria-hidden="true"></i>
                                </div>
                                <div className="props-title">
                                    {props.heading}
                                </div>
                                <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                </div>
                            </div>
                            <hr />
                            <div className="popup-content">
                                <div className="popup-content text">
                                    {data.map((val, index) => {
                                        return (<>
                                            <div className={Styles.cardContainer}>
                                                <div className={Styles.header}>
                                                    {val.time}, {val.location}
                                                </div>
                                                <div className={Styles.body}>
                                                    <div className={Styles.eachTeamContainer}>
                                                        <div className={Styles.eachTeam}>
                                                            {val.team1}
                                                        </div>
                                                    </div>
                                                    <div className={Styles.vs}>
                                                        vs
                                                    </div>
                                                    <div className={Styles.eachTeamContainer}>
                                                        <div className={Styles.eachTeam}>
                                                            {val.team2}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.footer}>
                                                    <div>
                                                        {val.highlight_line}
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-1
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q1_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q1_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-2
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q2_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q2_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-3
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q3_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q3_score}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.quarterContainer}>
                                                    <div className={Styles.headingContainer}>
                                                        Quarter-4
                                                    </div>
                                                    <div className={Styles.quarterScoreContainer}>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team1_q4_score}
                                                        </div>
                                                        <div className={Styles.quarterScore}>
                                                            {val.team2_q4_score}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else {
            return null;
        }
    }
    else {
        if (props.show === true) {
            return (
                <div className="popup" >
                    <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                        <div className="popup-heading">
                            <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                                <i className={style} aria-hidden="true"></i>
                            </div>
                            <div className="props-title">
                                {props.heading}
                            </div>
                            <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr />
                        <div className="popup-content">
                            <div className="popup-content text" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                                <h4 style={{ "textAlign": "center", "color": "#f1c40f" }}>MATCHES YET TO BEGIN</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}
