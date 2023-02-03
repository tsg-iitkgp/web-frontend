import "../Scorecard.css";
import Styles from "../../../../styles/components/GC_Live/cricket.module.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import PointsTable from "./PointsTable";
import Highlight from "./Highlight";
import UpcomingMatch from "./UpcomingMatch";
import PastMatch from "./PastMatch";

export default function CricketMatch(props) {

    var temp = null;
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');
    const [matchesCategory, setMatchesCategory] = useState('upcoming');

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
                                <h4 style={{ "textAlign": "center" }}>
                                    Live Score
                                </h4>
                                <div>
                                    <Highlight sheetName="Highlight1" />
                                    <Highlight sheetName="Highlight2" />
                                    <Highlight sheetName="Highlight3" />
                                    <Highlight sheetName="Highlight4" />
                                    <Highlight sheetName="Highlight5" />
                                </div>
                                <h4 style={{ "textAlign": "center" }}>
                                    Points Table
                                </h4>
                                <div>
                                    <PointsTable sport="Cricket" url="https://script.google.com/macros/s/AKfycbzO4e7uFe8eegnR7S91mhxnejnw5B1E9hZq7kwSEqaCoqbqB554ouZZX9GARoHNkwE/exec?sheetName=Points" />
                                </div>
                                <section className={Styles.matchesSection}>
                                    <div>
                                        <h4 style={{ "textAlign": "center" }}>
                                            Matches
                                        </h4>
                                        <div className={Styles.matchesNavMenu}>
                                            <div onClick={() => setMatchesCategory('upcoming')} className={`${Styles.navItem} ${matchesCategory === 'upcoming' ? Styles.active : ''}`}>
                                                Upcoming
                                            </div>
                                            <div onClick={() => setMatchesCategory('past')} className={`${Styles.navItem} ${matchesCategory === 'past' ? Styles.active : ''}`}>
                                                Past
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                props.data.map((match, index) => (
                                                    match.status === matchesCategory ? (

                                                        (matchesCategory === 'upcoming' ? (
                                                            <UpcomingMatch key={index} match={match} />
                                                        ) : (
                                                            <PastMatch key={index} match={match} />
                                                        ))
                                                    ) : (
                                                        <>
                                                        </>
                                                    )
                                                ))
                                            }
                                        </div>

                                    </div>
                                </section>
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
                                <h4 style={{ "textAlign": "center" }}>
                                    Live Score
                                </h4>
                                <div>
                                    <Highlight sheetName="Highlight1" />
                                    <Highlight sheetName="Highlight2" />
                                    <Highlight sheetName="Highlight3" />
                                    <Highlight sheetName="Highlight4" />
                                    <Highlight sheetName="Highlight5" />
                                </div>
                                <h4 style={{ "textAlign": "center" }}>
                                    Points Table
                                </h4>
                                <div>
                                    <PointsTable sport="Cricket" url="https://script.google.com/macros/s/AKfycbzO4e7uFe8eegnR7S91mhxnejnw5B1E9hZq7kwSEqaCoqbqB554ouZZX9GARoHNkwE/exec?sheetName=Points" />
                                </div>
                                <section className={Styles.matchesSection}>
                                    <div>
                                        <h4 style={{ "textAlign": "center" }}>
                                            Matches
                                        </h4>
                                        <div className={Styles.matchesNavMenu}>
                                            <div onClick={() => setMatchesCategory('upcoming')} className={`${Styles.navItem} ${matchesCategory === 'upcoming' ? Styles.active : ''}`}>
                                                Upcoming
                                            </div>
                                            <div onClick={() => setMatchesCategory('past')} className={`${Styles.navItem} ${matchesCategory === 'past' ? Styles.active : ''}`}>
                                                Past
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                data.map((match, index) => (
                                                    match.status === matchesCategory ? (

                                                        (matchesCategory === 'upcoming' ? (
                                                            <UpcomingMatch key={index} match={match} />
                                                        ) : (
                                                            <PastMatch key={index} match={match} />
                                                        ))
                                                    ) : (
                                                        <>
                                                        </>
                                                    )
                                                ))
                                            }
                                        </div>

                                    </div>
                                </section>
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
