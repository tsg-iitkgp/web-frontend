import Layout from "../../components/Layouts/Layout";
import {
  DropdownSelector,
  faqDropdownList,
} from "../../components/DropdownSelector";

export default function FA() {
  return (
    <Layout>
      <p className="pageHeading">FAQs</p> {/* Global CSS */}
      <DropdownSelector
        itemList={faqDropdownList}
        defaultOption={"0"}
      />
    </Layout>
  );
}
