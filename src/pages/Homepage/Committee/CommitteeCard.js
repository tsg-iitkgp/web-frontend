import React from "react";
import { Link } from "react-router-dom";
import Styles from "./committee-card.module.css";

export default function CommitteeCard({ data }) {
  return (
    <Link to={data.route}>
      <div className={Styles.card}>
        <div className={Styles.box}>
          <div className={Styles.content}>
            <h2>{data.number}</h2>
            <h3>{data.heading}</h3>
            <img src={data.background} />
            {/* <p>{data.description}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
