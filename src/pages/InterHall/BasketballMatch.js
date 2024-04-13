import React from 'react';
import Styles from '../../styles/css/InterHall/basketball.module.css';
import * as Icon from "react-feather";


function BasketballMatch({ data }) {
    return (
        <div className={Styles.cardContainer}>
            <div className={Styles.header}>
                {data.time}, {data.location}
            </div>
            <div className={Styles.body}>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.eachTeam}>
                        {data.team1}
                    </div>
                    {/* <div className={Styles.teamScore}>
                        {data.team1_score}
                    </div> */}
                </div>
                <div className={Styles.vs}>
                    vs
                </div>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.eachTeam}>
                        {data.team2}
                    </div>
                    {/* <div className={Styles.teamScore}>
                        {data.team2_score}
                    </div> */}
                </div>
            </div>
            <div className={Styles.footer}>
                <div>
                    {data.highlight_line}
                </div>
                {/* <div className={Styles.bestPlayer}>
                    <div className={Styles.iconContainer}>
                        <Icon.Award size={32} className={Styles.awardIcon} />
                        Best Player of the Match
                    </div>
                    <div className={Styles.bestPlayerName}>
                        {data.best_player}
                    </div>
                </div> */}
                {/* <div className={Styles.formationBtnContainer}>
          <a className={Styles.formationBtn} href={data.formation_link} target='_blank'>
            Formation
          </a>
        </div> */}
            </div>
            <div className={Styles.quarterContainer}>
                <div className={Styles.headingContainer}>
                    Quarter-1
                </div>
                <div className={Styles.quarterScoreContainer}>
                    <div className={Styles.quarterScore}>
                        {data.team1_q1_score}
                    </div>
                    <div className={Styles.quarterScore}>
                        {data.team2_q1_score}
                    </div>
                </div>
            </div>
            <div className={Styles.quarterContainer}>
                <div className={Styles.headingContainer}>
                    Quarter-2
                </div>
                <div className={Styles.quarterScoreContainer}>
                    <div className={Styles.quarterScore}>
                        {data.team1_q2_score}
                    </div>
                    <div className={Styles.quarterScore}>
                        {data.team2_q2_score}
                    </div>
                </div>
            </div>
            <div className={Styles.quarterContainer}>
                <div className={Styles.headingContainer}>
                    Quarter-3
                </div>
                <div className={Styles.quarterScoreContainer}>
                    <div className={Styles.quarterScore}>
                        {data.team1_q3_score}
                    </div>
                    <div className={Styles.quarterScore}>
                        {data.team2_q3_score}
                    </div>
                </div>
            </div>
            <div className={Styles.quarterContainer}>
                <div className={Styles.headingContainer}>
                    Quarter-4
                </div>
                <div className={Styles.quarterScoreContainer}>
                    <div className={Styles.quarterScore}>
                        {data.team1_q4_score}
                    </div>
                    <div className={Styles.quarterScore}>
                        {data.team2_q4_score}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BasketballMatch;