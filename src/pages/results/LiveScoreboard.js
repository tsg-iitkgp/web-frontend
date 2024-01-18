import axios from "axios";
import { useState } from "react";
import "./LiveScoreboard.css";
import SportsCard from "./SportsCard";
import sportsData from './sportsData.json';
import Layout from "../../components/Layout";

export default function LiveScoreboard() {
  const [data, setData] = useState(null);


  const fetchData = (item) => {
    axios.get(item.gc_url)
      .then((responseData) => {
        let score = responseData.data;
        setData(score.data);
      })
  }

  return (
    <Layout>
      <div style={{ marginTop: "10vh" }}>
        <h1>Live Scoreboard</h1>
        <div id="sports-cards" onMouseMove={e => {
          for (const card of document.getElementsByClassName("sports-card")) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        }}>
          {sportsData.map((item, index) => (
            <SportsCard key={index} data={item} />
          ))}
        </div>
      </div>
    </Layout>

  );
}
