import Layout from "../../../components/Layouts/Layout";
import "../subevents.css";
import {
  DropdownSelector,
  eventVerticals,
} from "../../../components/DropdownSelector";

export default function InterIIT() {
  return (
    <Layout>
      <section className="awards">
        <p className="pageHeading">INTER IIT</p> {/* Global CSS */}
        <DropdownSelector
          itemList={eventVerticals}
          defaultOption={eventVerticals[0]}
        />
      </section>
    </Layout>
  );
}
