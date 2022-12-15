import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Badminton(props) {

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
                  <tr><th>Date</th><th>Match</th><th></th><th>Set 1</th><th>Set 2</th><th>Set 3</th><th>Results</th></tr>
                  {props.data.data.map((val, key) => {
                    if (key >= 0 && key < 79) {
                      // console.log(val);
                      if (val[0] === "15th Dec" || val[0]=== "KGP vs Kanpur (Male)") {
                        if(val[0]==="15th Dec"){rowspan=7}
                        else if(val[0]==="KGP vs Kanpur (Male)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 0 && key!==1) {
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
                      else if (val[0] === "17th Dec" || val[0]=== "KGP vs Indore (Male)" || val[0]==="KGP vs Kanpur (Female)") {
                        if(val[0]==="17th Dec"){rowspan=13}
                        else if(val[0]==="KGP vs Indore (Male)"){rowspan=6}
                        else if(val[0]==="KGP vs Kanpur (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 7 && key!==8 && key!==14) {
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
                      }else if (val[0] === "18th Dec" || val[0]=== "Pre Quarter Final (x vs Y) (Male)" || val[0]==="Pre Quarter Final (x vs Y) (Female)") {
                        if(val[0]==="18th Dec"){rowspan=13}
                        else if(val[0]==="Pre Quarter Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Pre Quarter Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 20 && key!==21 && key!==27) {
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
                       else if (val[0] === "19th Dec" || val[0]=== "Quarter Final (x vs Y) (Male)" || val[0]==="Quarter Final (x vs Y) (Female)") {
                        if(val[0]==="19th Dec"){rowspan=13}
                        else if(val[0]==="Quarter Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Quarter Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 33 && key!==34 && key!==40) {
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
                      } else if (val[0] === "20th Dec" || val[0]=== "Semi Final (x vs Y) (Male)" || val[0]==="Semi Final (x vs Y) (Female)") {
                        if(val[0]==="20th Dec"){rowspan=13}
                        else if(val[0]==="Semi Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Semi Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 46 && key!==47 && key!==53) {
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
                      } else if (val[0] === "21st Dec" || val[0]=== "Final (x vs Y) (Male)" || val[0]==="Final (x vs Y) (Female)") {
                        if(val[0]==="21st Dec"){rowspan=13}
                        else if(val[0]==="Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 59 && key!==60 && key!==66) {
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
                  <tr><th>Date</th><th>Match</th><th></th><th>Set 1</th><th>Set 2</th><th>Set 3</th><th>Results</th></tr>
                  {data.data.map((val, key) => {
                    if (key >= 0 && key < 79) {
                      // console.log(val);
                      if (val[0] === "15th Dec" || val[0]=== "KGP vs Kanpur (Male)") {
                        if(val[0]==="15th Dec"){rowspan=7}
                        else if(val[0]==="KGP vs Kanpur (Male)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 0 && key!==1) {
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
                      else if (val[0] === "17th Dec" || val[0]=== "KGP vs Indore (Male)" || val[0]==="KGP vs Kanpur (Female)") {
                        if(val[0]==="17th Dec"){rowspan=13}
                        else if(val[0]==="KGP vs Indore (Male)"){rowspan=6}
                        else if(val[0]==="KGP vs Kanpur (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 7 && key!==8 && key!==14) {
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
                      }else if (val[0] === "18th Dec" || val[0]=== "Pre Quarter Final (x vs Y) (Male)" || val[0]==="Pre Quarter Final (x vs Y) (Female)") {
                        if(val[0]==="18th Dec"){rowspan=13}
                        else if(val[0]==="Pre Quarter Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Pre Quarter Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 20 && key!==21 && key!==27) {
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
                       else if (val[0] === "19th Dec" || val[0]=== "Quarter Final (x vs Y) (Male)" || val[0]==="Quarter Final (x vs Y) (Female)") {
                        if(val[0]==="19th Dec"){rowspan=13}
                        else if(val[0]==="Quarter Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Quarter Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 33 && key!==34 && key!==40) {
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
                      } else if (val[0] === "20th Dec" || val[0]=== "Semi Final (x vs Y) (Male)" || val[0]==="Semi Final (x vs Y) (Female)") {
                        if(val[0]==="20th Dec"){rowspan=13}
                        else if(val[0]==="Semi Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Semi Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 46 && key!==47 && key!==53) {
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
                      } else if (val[0] === "21st Dec" || val[0]=== "Final (x vs Y) (Male)" || val[0]==="Final (x vs Y) (Female)") {
                        if(val[0]==="21st Dec"){rowspan=13}
                        else if(val[0]==="Final (x vs Y) (Male)"){rowspan=6}
                        else if(val[0]==="Final (x vs Y) (Female)"){rowspan=6};
                        return (
                          <tr>
                            <td rowSpan={rowspan}>{val[0]}</td>
                            {val.map((cell, index) => {
                              if (key !== 59 && key!==60 && key!==66) {
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
