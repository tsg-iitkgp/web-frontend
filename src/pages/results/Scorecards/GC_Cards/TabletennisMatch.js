import "../Scorecard.css";
import Styles from "../../../../styles/components/GC_Live/football.module.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function TabletennisMatch(props) {

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
                                                    <div className={Styles.teamScore}>
                                                        {val.team1_score}
                                                    </div>
                                                    <div className={Styles.scorers}>
                                                        {val.team1_players}
                                                    </div>
                                                </div>
                                                <div className={Styles.vs}>
                                                    vs
                                                </div>
                                                <div className={Styles.eachTeamContainer}>
                                                    <div className={Styles.eachTeam}>
                                                        {val.team2}
                                                    </div>
                                                    <div className={Styles.teamScore}>
                                                        {val.team2_score}
                                                    </div>
                                                    <div className={Styles.scorers}>
                                                        {val.team2_players}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.footer}>
                                                <div>
                                                    {val.highlight_line}
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
                                                    <div className={Styles.teamScore}>
                                                        {val.team1_score}
                                                    </div>
                                                    <div className={Styles.scorers}>
                                                        {val.team1_players}
                                                    </div>
                                                </div>
                                                <div className={Styles.vs}>
                                                    vs
                                                </div>
                                                <div className={Styles.eachTeamContainer}>
                                                    <div className={Styles.eachTeam}>
                                                        {val.team2}
                                                    </div>
                                                    <div className={Styles.teamScore}>
                                                        {val.team2_score}
                                                    </div>
                                                    <div className={Styles.scorers}>
                                                        {val.team2_players}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.footer}>
                                                <div>
                                                    {val.highlight_line}
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
