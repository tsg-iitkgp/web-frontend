
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


const UpcomingEvents = [
  {
    title: "Something1",
    imgName: "something.jpg",
    start: "2021-11-05",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
    bodyContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
  },
  {
    title: "Something2",
    imgName: "something.jpg",
    start: "2021-11-06",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
    bodyContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis! Recusandae cum provident quia rem perspiciatis sit ex unde esse odit, ullam aliquid sequi doloribus vel ducimus? Est, in commodi!",
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
