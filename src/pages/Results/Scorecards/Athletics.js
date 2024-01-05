import "./Scorecard.css";
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Athletics(props) {

  var temp = null;
  var rowspan = " ";
    const [data, setData] = useState(null);
    const [style, setStyle] = useState('fa fa-refresh fa-2x');

    const fetchdata = (url) => {
        axios.get(url)
            .then((response) => {
                let score = response.data;
                // // // console.log(`This is score ${score.data}`);
                temp = score.data;
            })
            .then((responseData) => {
                // // console.log("fetched again");
                setData(temp);
                setStyle('fa fa-refresh fa-2x');
                // console.log(style);
                temp = null;
                rowspan = " ";
            })
    }

  if (props.show === true && data === null) {
    return (
        <>
            <div className="popup" >
                <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                    <div className="popup-heading">
                        <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => {fetchdata(props.url);setStyle('fa fa-refresh fa-spin fa-2x')}}>
                            <i className={style} aria-hidden="true"></i>
                        </div>
                        <div className="props-title">
                            {props.heading}
                        </div>
                        <div className="popup-closeButton" onClick={()=>{props.disable(); setData(null)}} >
                            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="popup-content">
                        <div className="popup-content text">
                        <table>
                                        <tr><th colSpan="6">RUNNING</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>0 && key <31){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 6;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==1){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 7;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==7){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==14){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==19){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==24){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="20th Dec"){
                                                        rowspan = 4;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==27){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">HURDLES</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>32 && key <41){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==33){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==35){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==37){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==39){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">LONG/HIGH/TRIPLE JUMP</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>42 && key <52){
                                                    // console.log(val);
                                                    if(val[0]==="16th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==43){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==45){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==48){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==50){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">POLE VAULT/ SHOTPUT/ DISCUS THROW/ JAVELIN THROW/ HAMMER THROW</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>53 && key <68){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==54){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==57){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==60){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==62){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==64){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==66){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">RELAY RACE</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {props.data.data.map((val, key)=>{
                                                if(key>69 && key <82){
                                                    // console.log(val);
                                                    if(val[0]==="18th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==70){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==73){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="20th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==76){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==79){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
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
    // console.log(data);
    return (
        <>
            <div className="popup" >
                <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                    <div className="popup-heading">
                        <div className='popup-closeButton popup-refresh' style={{ color: "#f1c40f" }} onClick={() => {fetchdata(props.url);setStyle('fa fa-refresh fa-spin fa-2x')}}>
                            <i className={style} aria-hidden="true"></i>
                        </div>
                        <div className="props-title">
                            {props.heading}
                        </div>
                        <div className="popup-closeButton" onClick={()=>{props.disable(); setData(null)}} >
                            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="popup-content">
                        <div className="popup-content text">
                        <table>
                                        <tr><th colSpan="6">RUNNING</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>0 && key <31){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 6;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==1){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 7;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==7){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==14){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 5;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==19){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==24){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }else if(val[0]==="20th Dec"){
                                                        rowspan = 4;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==27){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">HURDLES</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>32 && key <41){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==33){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==35){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==37){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==39){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                        
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">LONG/HIGH/TRIPLE JUMP</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>42 && key <52){
                                                    // console.log(val);
                                                    if(val[0]==="16th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==43){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==45){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==48){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==50){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">POLE VAULT/ SHOTPUT/ DISCUS THROW/ JAVELIN THROW/ HAMMER THROW</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>53 && key <68){
                                                    // console.log(val);
                                                    if(val[0]==="15th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==54){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="16th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==57){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="17th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==60){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="18th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==62){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==64){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="21st Dec"){
                                                        rowspan = 2;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==66){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
                                                    return null;
                                                }
                                            })}
                                    </table>
                                    <table>
                                        <tr><th colSpan="6">RELAY RACE</th></tr>
                                        <tr><th>Date</th><th>Event</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr>
                                            {data.data.map((val, key)=>{
                                                if(key>69 && key <82){
                                                    // console.log(val);
                                                    if(val[0]==="18th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==70){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="19th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==73){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="20th Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==76){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(val[0]==="22nd Dec"){
                                                        rowspan = 3;
                                                        return(
                                                            <tr>
                                                                <th rowSpan={rowspan}>{val[0]}</th>
                                                                    {val.map((cell, index)=>{
                                                                        if(key!==79){
                                                                            return(
                                                                                <td>
                                                                                    {cell}
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else{
                                                                            return null;
                                                                        }
                                                                    })}
                                                            </tr>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <tr>
                                                               {val.map((cell, index)=>{
                                                                return(<td>{cell}</td>)
                                                               })} 
                                                            </tr>
                                                            )
                                                    }
                                                }
                                                else{
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
