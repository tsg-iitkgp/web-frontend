import React from "react";
import Styles from "../styles/components/soc.module.css";
import Data from "../data/soc";

export default function RotatingCards({ name, category }) {
  const committeeName = name;
  return (
    <div>
      <h1 className={Styles.heading}>{committeeName}</h1>
      <section className={Styles.cardswrapper}>
        {Data.data
          .filter((data) => data.category === category)
          .map((item, i) => {
            return (
              <div className={Styles.card}>
                <div className={Styles.cardfront}>
                  <img
                    className={Styles.img1}
                    src={`/media/images/societies/${item.shortform}.png`}
                    loading="lazy"
                    alt="image01"
                    width={600}
                    height={600}
                  />
                </div>
                <div className={Styles.cardback}>
                  <div className={Styles.cardbackcontent}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a
                      className={`${Styles.button} ${Styles.a1}`}
                      title="Lorem Ipsum"
                      href={item.facebook_link}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
