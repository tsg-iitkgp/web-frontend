import React from 'react'
import Styles from './template.module.css'
import {BrowserRouter as Link} from 'react-router-dom' 
import { withWidth } from '@material-ui/core';

export default function RenderContent({activeFilter}){
  switch(activeFilter){
    case 'today':
    const statusToday = "upcoming";
    return (
        <div style={{width:'80vw',margin:'0 auto'}}>
          <div>
            <h1 style={{textAlign:'left'}}>Live Matches</h1>
            <div className={Styles.matchContainer}>
              <MatchCard status={statusToday}/>
              <MatchCard status={statusToday}/>
              <MatchCard status={statusToday}/>
            </div>
          </div>
          <div>
            <h1 style={{textAlign:'left'}}>Today's Matches</h1>
            <div>
              <MatchCard status={statusToday}/>
            </div>
          </div>
        </div>
      );
    case 'upcoming':
      return (
        <section className='withTable'>
          <div
            className="table-container"
            data-aos="zoom-in-up"
            style={{ paddingTop: "2rem" }}
          >
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Match</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                  <tr id="overall">
                    <td>RK vs RP</td>
                    <td>18/01/24</td>
                    <td>10:00 am</td>
                    <td>Tata sports complex</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </section>
      );
    case 'past':
      return <p>Displaying past matches content.</p>;
    case 'points':
      return (
        <section className='withTable'>
          <div
            className="table-container"
            data-aos="zoom-in-up"
            style={{ paddingTop: "2rem" }}
          >
            <table>
              <thead style={{ border: "10px solid #fff" }}>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  <th>Played</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>Tied</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody style={{ border: "10px solid #fff" }}>
                  <tr id="overall">
                    <td>1</td>
                    <td>RK </td>
                    <td>10 </td>
                    <td>10</td>
                    <td>0</td>
                    <td>0</td>
                    <td>20</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </section>
      );
    default:
      return null;
  }
}

function MatchCard({status}){
  return (
    <div className={Styles.MatchCard}>
      <p><span>Date&Time</span>:16/01/24,08:00am</p>
      <div>
        <div>

        </div>
        <div>
          
        </div>
      </div>
      <p>RK Won the match by 60 runs</p>
      <p><span>Venue</span>Tata Sports Complex</p>
      <Link to='/'>More details</Link>
    </div>
  )
}