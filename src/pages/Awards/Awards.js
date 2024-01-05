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
      <section className="awards content" >
        <p className="pageHeading">HALL OF FAME</p> {/* Global CSS */}
        <DropdownSelector
          itemList={awardsDropdownList}
          defaultOption={awardsDropdownList[0]}
        />
      </section>
    </Layout>
  );
}

export default Awards;
