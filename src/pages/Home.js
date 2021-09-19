import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "react-bootstrap/Card";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Styles from "../styles/home.module.css";

import { height, text } from "dom-helpers";
import { Link } from "react-router-dom";

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const openLink = (videoLink) => {
    window.open(videoLink);
  };

  document.title = "Home | TSG";
  return (
    <Layout>
      <Section>
        <AutoplaySlider
          className={Styles.carouselContainer}
          play={true}
          interval={5000}
        >
          <div
            data-src={"/data/images/posters/cyclothon.jpeg"}
            onClick={() => openLink("")}
          />
          <div
            data-src={"/data/images/posters/case_study.jpg"}
            onClick={() => openLink("")}
          />
        </AutoplaySlider>
      </Section>
      <Section>
        <h2 className="section-heading">About Us</h2>
        <p className="description">
          Technology Students’ Gymkhana is the hub of the numerous
          extra-curricular and co-curricular activities in IIT Kharagpur ranging
          from sports to socio-cultural. The Gymkhana is managed by the
          students, for the students, under the guidance and active
          participation of the faculty and staff members.
        </p>
        <blockquote className="description">
          "Yogah Karmasu Kausalam"
        </blockquote>
        <p className="description">
          The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM
          which in English means "Perfection in action is Yoga". Our goal is to
          bring overall development in IITians through cultivating and nurturing
          their extra-curricular talents.
        </p>
      </Section>

      <Section>
        <div class="main">
          <h1 class="section-heading">Societies And Cells</h1>
          <ul class={Styles.cards}>
            <li class={Styles.cards_item}>
              <div class={Styles.card}>
                <div class={Styles.card_image}>
                  <img
                    src="https://avatars.githubusercontent.com/u/10076427?v=4"
                    className={Styles.images}
                  />
                </div>
                <div class={Styles.card_content}>
                  <h2 class={Styles.card_title}>Research Groups</h2>
                  <p class={Styles.card_text}>
                    Falna Dhikna Falna Dhikna Falna Dhikna Falna Dhikna
                  </p>
                  <Link to="Societies" className={Styles.buttons}>
                    <button class={Styles.btn}>Read More</button>
                  </Link>
                </div>
              </div>
            </li>
            <li class={Styles.cards_item}>
              <div class={Styles.card}>
                <div class={Styles.card_image}>
                  <img
                    src="https://lh3.googleusercontent.com/proxy/T6zrX_BIcr3eF29Xh6Izpn86ruCvihdEbrurC0WHXE5e0kfedAPWZSZ87Ke3wO065j9jL1GHMhU6iuZLlpZNLpoo4h_dEIQ0sJU"
                    className={Styles.images}
                  />
                </div>
                <div class={Styles.card_content}>
                  <h2 class={Styles.card_title}>Social and Cultural</h2>
                  <p class={Styles.card_text}>
                    Falna Dhikna Falna Dhikna Falna Dhikna Falna Dhikna
                  </p>
                  <Link to="Societies" className={Styles.buttons}>
                    <button class={Styles.btn}>Read More</button>
                  </Link>
                </div>
              </div>
            </li>
            <li class={Styles.cards_item}>
              <div class={Styles.card}>
                <div class={Styles.card_image}>
                  <img
                    src="data:image/png;base64,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"
                    className={Styles.images}
                  />
                </div>
                <div class={Styles.card_content}>
                  <h2 class={Styles.card_title}>Sports and Games</h2>
                  <p class={Styles.card_text}>
                    Falna Dhikna Falna Dhikna Falna Dhikna Falna Dhikna
                  </p>
                  <Link to="Societies" className={Styles.buttons}>
                    <button class={Styles.btn}>Read More</button>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Section>
      <footer>
        <h1>Hello</h1>
      </footer>
    </Layout>
  );
}
