import "../Scorecard.css";
import * as Icon from "react-feather";
import Styles from "../../../../styles/components/GC_Live/sports.module.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function AthleticsMatch(props) {

    var temp = null;
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');

    const fetchdata = (url) => {
        axios.get(url)
            .then((response) => {
                let score = response.data;
                temp = score.data;
            })
            .then((responseData) => {
                setData(temp);
                setStyle('fa fa-refresh fa-2x');
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
                                                <div className={Styles.timer}>
                                                    {val.timer}
                                                </div>
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
                                                            <img src='/images/soccer-ball.png' alt="Err" />
                                                            {val.team1_goalscorers}
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
                                                            <img src='/images/soccer-ball.png' alt="Err" />
                                                            {val.team2_goalscorers}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.footer}>
                                                    <div>
                                                        {val.highlight_line}
                                                    </div>
                                                    <div className={Styles.bestPlayer}>
                                                        <div className={Styles.iconContainer}>
                                                            <Icon.Award className={Styles.awardIcon} />
                                                            Best Player of the Match
                                                        </div>
                                                        <div className={Styles.bestPlayerName}>
                                                            {val.best_player}
                                                        </div>
                                                    </div>
                                                    <div className={Styles.formationBtnContainer}>
                                                        <a className={Styles.formationBtn} href={val.formation_link} target='_blank' rel="noreferrer">
                                                            Formation
                                                        </a>
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
                                                <div className={Styles.timer}>
                                                    {val.timer}
                                                </div>
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
                                                            <img src='/images/soccer-ball.png' alt="Err" />
                                                            {val.team1_goalscorers}
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
                                                            <img src='/images/soccer-ball.png' alt="Err" />
                                                            {val.team2_goalscorers}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={Styles.footer}>
                                                    <div>
                                                        {val.highlight_line}
                                                    </div>
                                                    <div className={Styles.bestPlayer}>
                                                        <div className={Styles.iconContainer}>
                                                            {/* <Icon.Award size={32} className={Styles.awardIcon} /> */}
                                                            Best Player of the Match
                                                        </div>
                                                        <div className={Styles.bestPlayerName}>
                                                            {val.best_player}
                                                        </div>
                                                    </div>
                                                    <div className={Styles.formationBtnContainer}>
                                                        <a className={Styles.formationBtn} href={val.formation_link} target='_blank' rel="noreferrer">
                                                            Formation
                                                        </a>
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
