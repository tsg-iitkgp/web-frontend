// import GCdata from "./GCdata";
const { default: axios } = require("axios");
const InterIITdata = require("./InterIITdata");

const years = ["2016-17", "2017-18", "2018-19", "2019-20", "2020-21", "2021-22"];

console.log("--------------------");

years.map((value, index)=>{
    InterIITdata.InterIITdata[value].Socult.map(async (data, ind)=>{
        await axios.post("http://localhost:5050/admin/results/InterIIT", {
            year: value,
            category: "Socult",
            sex: "NAN",
            event: data.Event,
            gold: data.Gold,
            silver: data.Silver,
            bronze: data.Bronze, 
        })
        console.log(data.Event)

    })
})