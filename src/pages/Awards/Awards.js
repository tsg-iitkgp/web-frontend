import Layout from "../../components/Layouts/Layout";
import "./Awards.css";
import {
  DropdownSelector,
  awardsDropdownList,
} from "../../components/DropdownSelector";

function Awards() {
  document.title = "Hall Of Fame | TSG";

  return (
    <Layout>
      <section className="awards content" data-aos="zoom-in-up">
        <h2 className="awards_h2">HALL OF FAME</h2>
        <DropdownSelector itemList={awardsDropdownList} defaultOption={"SPORTS & GAMES"} />
      </section>
    </Layout>
  );
}

export default Awards;
