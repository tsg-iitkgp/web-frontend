import React from 'react';
import Styles from '../../styles/css/InterHall/football.module.css';
import * as Icon from "react-feather";


function TennisMatch({ data }) {
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
                </div>
                <div className={Styles.vs}>
                    vs
                </div>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.eachTeam}>
                        {data.team2}
                    </div>
                </div>
            </div>
            <div>
                <h5 className={Styles.quarterHeading}>
                    Singles
                </h5>
            </div>
            <div className={Styles.body}>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team1_singles_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team1_singles_players}
                    </div>
                </div>
                <div className={Styles.vs}>
                    vs
                </div>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team2_singles_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team2_singles_players}
                    </div>
                </div>
            </div>
            <div>
                <h5 className={Styles.quarterHeading}>
                    Doubles
                </h5>
            </div>
            <div className={Styles.body}>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team1_doubles_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team1_doubles_players}
                    </div>
                </div>
                <div className={Styles.vs}>
                    vs
                </div>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team2_doubles_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team2_doubles_players}
                    </div>
                </div>
            </div>
            <div>
                <h5 className={Styles.quarterHeading}>
                    Reverse Singles
                </h5>
            </div>
            <div className={Styles.body}>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team1_reverse_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team1_reverse_players}
                    </div>
                </div>
                <div className={Styles.vs}>
                    vs
                </div>
                <div className={Styles.eachTeamContainer}>
                    <div className={Styles.teamScore}>
                        {data.team2_reverse_score}
                    </div>
                    <div className={Styles.scorers}>
                        {data.team2_reverse_players}
                    </div>
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
        </div>
    )
}


export default TennisMatch;