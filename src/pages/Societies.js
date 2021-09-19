import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Styles from "../styles/home.module.css";
import { height, text } from "dom-helpers";
import { Link } from "react-router-dom";

import SocietiesData from "./../components/data/societiesData.json";

export default function Societies() {
  document.title = "Societies and Cells | TSG";
  const data = SocietiesData;
  const newdata = data.map((society) => {
    return (
      <li class={Styles.cards_item}>
        <div class={Styles.card}>
          <div class={Styles.card_image}>
            <img
              src={"https://avatars.githubusercontent.com/u/10076427?v=4"}
              className={Styles.images}
            />
          </div>
          <div class={Styles.card_content}>
            <h2 class={Styles.card_title}>{society.name}</h2>
            <p class={Styles.card_text}>{society.description}</p>
            <Link to="Societies" className={Styles.buttons}>
              <button class={Styles.btn}>Read More</button>
            </Link>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div class="main">
      <h1 class="section-heading">Societies And Cells</h1>
      <ul class={Styles.cards}>{newdata}</ul>
    </div>
  );
}
