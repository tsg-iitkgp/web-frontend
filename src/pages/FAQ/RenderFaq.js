import { useEffect, useState } from "react";
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
    rowTitleTextSize: "20px",
    rowTitleColor: "#f1c40f",
    rowContentColor: "grey",
    rowContentTextSize: "18px",
    arrowColor: "#f1c40f",
  };
  // Content Index

  return (
    <>
      <Faq data={data[option]} styles={faqStyleConfig} config={{}} />
    </>
  );
}
