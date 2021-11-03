import React from "react";
import { Link } from "react-router-dom";
import Styles from "./committee-card.module.css";

export default function CommitteeCard({ data }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.box}>
        <div className={Styles.content}>
          <h2>
            {data.number}
          </h2>
          <h3>
            {data.heading}
          </h3>
          <p>
            {data.description}
          </p>
          <Link className={Styles.readMore} to={data.route}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
