import React, { useEffect, useState } from 'react';
import Styles from "../../../../styles/components/GC_Live/highlight.module.css";
import * as Icon from "react-feather";
import CricketScoreCardModal from './CricketScoreCardModal';


function Highlight({ sheetName = 'Highlight1' }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchData, setMatchData] = useState();

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzO4e7uFe8eegnR7S91mhxnejnw5B1E9hZq7kwSEqaCoqbqB554ouZZX9GARoHNkwE/exec?sheetName=${sheetName}&isVertical=true`)
            .then((response) => (response.json())).then((responseData) => {
                setMatchData(responseData.data);
                setIsLoading(false);
            }).catch((err) => setIsLoading(false));
    }, [])

    const openModal = (index) => {
        setIsModalOpen(true);   
        console.log(isModalOpen)
    }

    return (
        <>
            {
                isLoading ? (
                    <div className={Styles.loader}>
                        
                    </div>
                ) : (
                    matchData && (
                        <div className={Styles.highlightCard}>
                            <div className={Styles.topContainer}>
                                <p className={Styles.date}>
                                    {matchData.timing}
                                </p>
                                <p className={Styles.description}>
                                    - {matchData.result_line} -
                                </p>
                            </div>
                            <div className={Styles.scoreContainer}>
                                <div className={Styles.teamContainer}>
                                    <div className={Styles.teamName}>
                                        {matchData.team1}
                                    </div>
                                    <div className={Styles.overs}>
                                        {matchData.team1_score}
                                    </div>
                                </div>
                                <div className={Styles.vs}>
                                    Vs
                                </div>
                                <div className={Styles.teamContainer}>
                                    <div className={Styles.teamName}>
                                        {matchData.team2}
                                    </div>
                                    <div className={Styles.overs}>
                                        {matchData.team2_score}
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.bottomContainer}>
                                <div className={Styles.bestPlayer}>
                                    <div className={Styles.iconContainer}>
                                        <Icon.Award size={32} className={Styles.awardIcon} />
                                        Best Player of the Match
                                    </div>
                                    <div className={Styles.bestPlayerName}>
                                        {matchData.best_player}
                                    </div>
                                </div>
                                <button className={Styles.scorecardBtn} onClick={openModal}>
                                    Score Card
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            <div className={Styles.modalContainer}>
                {
                    matchData && (
                        <CricketScoreCardModal matchData={matchData} isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
                    )
                }
            </div>
        </>
    )
}

export default Highlight