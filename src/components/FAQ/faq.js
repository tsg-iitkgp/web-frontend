import React from "react";
import Faq from "react-faq-component";
import Layout from "../Layout";
import Sidebar from "../Sidebar/Sidebar";
import { faqSidebarList } from "../Sidebar/SidebarList";
import { data } from "./FaqData";
import Styles from "./Faq.module.css";
const styles = {
  bgColor: "black",
  titleTextColor: "#fff",
  rowTitleTextSize: "20px",
  rowTitleColor: "#f1c40f",
  rowContentColor: "grey",
  rowContentTextSize: "18px",
  arrowColor: "#f1c40f",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function faq() {
  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <Sidebar itemsList={faqSidebarList} style={{ position: "fixed" }} />

        <div className={Styles.content}>
          <h2
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "36px",
            }}
          >
            FAQs
          </h2>
          <div>
            {data.map((eachData, index) => {
              return (
                <div
                  id={eachData.title}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <Faq data={eachData} styles={styles} config={config} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
