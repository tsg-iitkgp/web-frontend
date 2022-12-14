import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Basketball(props) {

  var temp = null;
  var rowspan = 0;
  const [data, setData] = useState(null);
  const [style, setStyle] = useState('fa fa-refresh fa-2x');

  const fetchdata = (url) => {
    axios.get(url)
      .then((response) => {
        let score = response.data;
        // console.log(`This is score ${score.data}`);
        temp = score.data;
      })
      .then((responseData) => {
        // console.log("fetched again");
        setData(temp);
        setStyle('fa fa-refresh fa-2x');
        // console.log(style);
        temp = null;
        rowspan = 0;
      })
  }

  if (props.show === true && data === null) {
    return (
      <>
        <div className="popup" >
          <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
            <div className="popup-heading">
              <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                <i className={style} aria-hidden="true"></i>
              </div>
              <div className="props-title">
                {props.heading}
              </div>
              <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <hr />
            <div className="popup-content">
              <div className="popup-content text">
                <table>
                  <tr><th>Date</th><th>Event</th><th>Match (T1 v/s T2)</th><th>Quarter1</th><th>Quarter2</th><th>Quarter 3</th><th>Quarter 4</th><th>Final Score</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 16) {
                      // console.log(val);
                      if (val[0] === "17th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 0) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      }
                      else if (val[0] === "18th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 3) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } else if (val[0] === "19th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 6) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } else if (val[0] === "20th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 9) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } else if (val[0] === "21st Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 12) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } 
                      else {
                        return (
                          <tr>
                            {val.map((cell, index) => {
                              return (<td>{cell}</td>)
                            })}
                          </tr>
                        )
                      }
                    }
                    else {
                      return null;
                    }
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else if (props.show === true && data !== null) {
    return(
      <>
        <div className="popup" >
          <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
            <div className="popup-heading">
              <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => { fetchdata(props.url); setStyle('fa fa-refresh fa-spin fa-2x') }}>
                <i className={style} aria-hidden="true"></i>
              </div>
              <div className="props-title">
                {props.heading}
              </div>
              <div className="popup-closeButton" onClick={() => { props.disable(); setData(null) }} >
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <hr />
            <div className="popup-content">
              <div className="popup-content text">
                <table>
                <tr><th>Date</th><th>Event</th><th>Match (T1 v/s T2)</th><th>Quarter1</th><th>Quarter2</th><th>Quarter 3</th><th>Quarter 4</th><th>Final Score</th></tr>
                  {data.data.map((val, key) => {
                    if (key >= 0 && key < 8) {
                      // console.log(val);
                      if (val[0] === "17th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 0) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      }
                      else if (val[0] === "19th Dec") {
                        rowspan = 3;
                        return (
                          <tr>
                            <th rowSpan={rowspan}>{val[0]}</th>
                            {val.map((cell, index) => {
                              if (key !== 3) {
                                return (
                                  <td>
                                    {cell}
                                  </td>
                                )
                              }
                              else {
                                return null;
                              }
                            })}
                          </tr>
                        )
                      } 
                      else {
                        return (
                          <tr>
                            {val.map((cell, index) => {
                              return (<td>{cell}</td>)
                            })}
                          </tr>
                        )
                      }
                    }
                    else {
                      return null;
                    }
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return null;
  }
}
