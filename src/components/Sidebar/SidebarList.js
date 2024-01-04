import { data } from "../FAQ/FaqData";

export const resultsSidebarList = [
  {
    title: "General Championship",
    route: "/results/gc",
  },
  {
    title: "Inter IIT",
    route: "/results/interiit",
  },
  {
    title: "Live Scoreboard",
    route: "/results/livescore",
  },
];
export const faqSidebarList = data.map((element, index) => {
  return {
    title: element.title,
    route: "#" + element.title,
  };
});
