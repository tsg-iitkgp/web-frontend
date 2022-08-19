import React, { useState } from "react";
import Faq from "react-faq-component";
import Layout from "../Layout";
// import Sidebar from "../Sidebar/Sidebar";
import { faqSidebarList } from "../Sidebar/SidebarList";
import { data } from "./FaqData";
import "./Faq.css";
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

export default function FA() {
  const [topic, setTopic] = useState("ADDITIONALS / ELECTIVES / BREADTH");
  const [topicData, setTopicData] = useState(data[0]);
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    const matchingTopic = data.find(
      (topic) => topic.title === event.target.value
    );
    setTopicData(matchingTopic);
    // console.log(matchingTopic);
  };
  return (
    <Layout>
      <div style={{ marginTop: "10vh" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
            position: "relative",
          }}
        >
          <select
            value={topic}
            onChange={handleTopicChange}
            className="selectButton"
          >
            {faqSidebarList.map((topic, index) => (
              <option value={topic.title}>{topic.title}</option>
            ))}
          </select>
          <span
            className="material-icons"
            style={{
              color: "#000",
              position: "absolute",
              top: "25%",
              right: "22%",
              cursor: "pointer",
            }}
          >
            expand_more
          </span>
        </div>
        <Faq data={topicData} styles={styles} config={config} />
      </div>
    </Layout>
  );
}
