
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


const UpcomingEvents = [
  {
    title: "Web Hackathon",
    imgName: "web-hack.jpg",
    start: "1st Dec, 2021",
    description:
      "Technology Students' Gymkhana is organising a hackathon of developing a web application for gymkhana. The main purpose of this web application is to bring all the gymkhana related information and services under a single umbrella. This application would serve as a non-academic ERP for all the students of the Indian Institute of Technology Kharagpur.",
    },
  {
    title: "Mime Competition",
    imgName: "Mime Competition",
    start: "9th Dec, 2021",
    description:
      "Depict your theatrical skills and engender the audience spellbound. Explore through ideas, topics – your performance could be based on any theme. ",
    },
  {
    title: "Something3",
    imgName: "something.jpg",
    start: todayStr + 'T12:00:00',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
    bodyContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
  },
];
export default UpcomingEvents;
