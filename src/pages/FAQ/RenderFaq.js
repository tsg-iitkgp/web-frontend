import Faq from "react-faq-component";
import { data } from "./FaqData";

export default function RenderFaqFromDropdown({ option }) {
  /**
   * FAQ Element related
   */
  // Styling
  const faqStyleConfig = {
    bgColor: "black",
    titleTextColor: "#fff",
    titleTextSize: "1.5rem",
    rowTitleColor: "#f1c40f",
    rowTitleTextSize: "1.2rem",
    rowContentColor: "grey",
    rowContentTextSize: "1.1rem",
    arrowColor: "#f1c40f",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <>
      <div data-aos="zoom-in-up">
        <Faq data={data[option]} styles={faqStyleConfig} config={config} />
      </div>
    </>
  );
}
