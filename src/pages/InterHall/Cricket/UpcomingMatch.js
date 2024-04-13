import React from 'react';
import Styles from '../../../styles/css/InterHall/Cricket/highlight.module.css'

function UpcomingMatch({ match }) {
    return (
        <div className={Styles.highlightCard}>
                            <div className={Styles.topContainer}>
                                <p className={Styles.date}>
                                    {match.timing}
                                </p>
                            </div>
                            <div className={Styles.scoreContainer}>
                                <div className={`${Styles.teamContainer} ${Styles.upcomingTeamContainer}`}>
                                    <div className={Styles.teamName}>
                                        {match.team1}
                                    </div>
                                </div>
                                <div className={Styles.vs}>
                                    Vs
                                </div>
                                <div className={`${Styles.teamContainer} ${Styles.upcomingTeamContainer}`}>
                                    <div className={Styles.teamName}>
                                        {match.team2}
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}

export default UpcomingMatch;