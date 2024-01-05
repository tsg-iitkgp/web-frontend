import { data } from "../../pages/FAQ/FaqData";

export const contactsDropdownList = [
  "CURRENT OFFICE BEARERS",
  "STAFF",
  "PREVIOUS OFFICE BEARERS",
];

export const awardsDropdownList = [
  "SPORTS & GAMES",
  "TECHNOLOGY",
  "SOCIAL & CULTURAL",
  "SPECIAL RECOGNITION",
];

export const faqDropdownList = data.map((element, index) => {
  return { index: index, title: element.title };
});
