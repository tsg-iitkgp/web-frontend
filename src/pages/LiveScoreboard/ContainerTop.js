import React from 'react'
import Styles from "./ContainerTop.module.css";
const ContainerTop = () => {
    const data = [
        { team1: "180/4", team2: "67/1" },
        { team1: "Abhinay", team2: "Amar 34(4.5)" },
        { team1: "0-19(2.5)", team2: "Sahil 23(5.5)" },
    ];
  return (
    <div className={Styles.container} data-aos="zoom-in-up">
      <div className={Styles.aboutUsSection}>
        <table className={Styles.description}>
            <tr>
                <th className={Styles.heading}> LBS </th>
                <th className={Styles.heading}> RPH </th>
           </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.team1}</td>
                            <td>{val.team2}</td>
                        </tr>
                    )
                })}
            </table>
      </div>
    </div>
  )
}

export default ContainerTop