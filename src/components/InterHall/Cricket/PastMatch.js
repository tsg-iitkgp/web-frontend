import React, { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { css } from "@emotion/react";
import Styles from '../../../styles/css/InterHall/Cricket/highlight.module.css';
import CricketScoreCardModal from '../../Modals/CricketScoreCardModal';
import * as Icon from "react-feather";


const override = css`
  display: block;
  margin: auto;
`;


function PastMatch({ match }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setIsModalOpen(true);
        console.log(isModalOpen)
    }

    console.log(match);

    return (
        <>
            {
                match && (
                    <div className={Styles.highlightCard}>
                        <div className={Styles.topContainer}>
                            <p className={Styles.date}>
                                {match.timing}
                            </p>
                            <p className={Styles.description}>
                                - {match.result_line} -
                            </p>
                        </div>
                        <div className={Styles.scoreContainer}>
                            <div className={Styles.teamContainer}>
                                <div className={Styles.teamName}>
                                    {match.team1}
                                </div>
                                <div className={Styles.overs}>
                                    {match.team1_score}
                                </div>
                            </div>
                            <div className={Styles.vs}>
                                Vs
                            </div>
                            <div className={Styles.teamContainer}>
                                <div className={Styles.teamName}>
                                    {match.team2}
                                </div>
                                <div className={Styles.overs}>
                                    {match.team2_score}
                                </div>
                            </div>
                        </div>
                        <div className={Styles.bottomContainer}>
                            {/* <p className={Styles.description}>
                                    - {match.result_line} -
                                </p> */}
                            <div className={Styles.bestPlayer}>
                                <div className={Styles.iconContainer}>
                                    <Icon.Award size={32} className={Styles.awardIcon} />
                                    Best Player of the Match
                                </div>
                                <div className={Styles.bestPlayerName}>
                                    {match.best_player}
                                </div>
                            </div>
                            <button className={Styles.scorecardBtn} onClick={openModal}>
                                Score Card
                            </button>
                        </div>
                    </div>
                )
            }
            <div className={Styles.modalContainer}>
                {
                    match && (
                        <CricketScoreCardModal matchData={match} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
                    )
                }
            </div>
        </>
    )
}

export default PastMatch;