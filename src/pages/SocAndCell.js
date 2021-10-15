import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Styles from "../styles/components/SocAndCell.module.css";

export default function SocAndCell() {
  return (
    <div className={Styles.socs}>
      <div className={Styles.container}>
        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.sc}`}>
            <div className={Styles.content}>
              <h3>Social and Cultural</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2} `}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="/societies">Read More</a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.te}`}>
            <div className={Styles.content}>
              <h3>Technology</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2}`}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="/societies">Read More</a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.wf}`}>
            <div className={Styles.content}>
              <h3>Welfare</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2}`}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="/societies">Read More</a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.sg}`}>
            <div className={Styles.content}>
              <h3>Sports and Games</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2}`}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="/societies">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
