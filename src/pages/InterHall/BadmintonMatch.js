import React from 'react';
import Styles from '../../styles/css/InterHall/badminton.module.css';
import * as Icon from "react-feather";


function BadmintonMatch({ data }) {
  return (
    <div className={Styles.cardContainer}>
      {/* <div className={Styles.timer}>
        {data.timer}
      </div> */}
      <div className={Styles.header}>
        {data.time}, {data.location}
      </div>
      <div className={Styles.body}>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team1}
          </div>
          <div className={Styles.teamScore}>
            1st Singles - {data.team1_1s_score}
          </div>
          <div className={Styles.teamScore}>
            1st Doubles - {data.team1_1d_score}
          </div>
          <div className={Styles.teamScore}>
            2nd Singles - {data.team1_2s_score}
          </div>
          {/* <div className={Styles.scorers}>
            <img src='/images/soccer-ball.png' />
            {data.team1_goalscorers}
          </div> */}
        </div>
        <div className={Styles.vs}>
          vs
        </div>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team2}
          </div>
          <div className={Styles.teamScore}>
            1st Singles - {data.team2_1s_score}
          </div>
          <div className={Styles.teamScore}>
            1st Doubles - {data.team2_1d_score}
          </div>
          <div className={Styles.teamScore}>
            2nd Singles - {data.team2_2s_score}
          </div>
          {/* <div className={Styles.scorers}>
            <img src='/images/soccer-ball.png' />
            {data.team2_goalscorers}
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
        </div>
        <div className={Styles.formationBtnContainer}>
          <a className={Styles.formationBtn} href={data.formation_link} target='_blank'>
            Formation
          </a>
        </div> */}
      </div>
    </div>
  )
}


export default BadmintonMatch;