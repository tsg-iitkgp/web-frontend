import { data } from "../FAQ/FaqData";

export const contactsSidebarList = [
  {
    title: "Current Office Bearers",
    route: "/contacts/current-office-bearers",
  },
  {
    title: "Secretaries",
    route: "/contacts/secretaries",
  },
  {
    title: "Past Office Bearers",
    route: "/contacts/pastBearers",
  },
  {
    title: "Staff",
    route: "/contacts/staff",
  },
];
export const resultsSidebarList = [
  {
    title: "General Championship",
    route: "/results/gc",
  },
  {
    title: "Inter IIT",
    route: "/results/inter_iit",
  },
];
export const faqSidebarList = data.map((element, index) => {
  return {
    title: element.title,
    route: "#" + element.title,
  };
});
// console.log(faqSidebarList);
