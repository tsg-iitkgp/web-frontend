import './MatchCard.css';
import img1 from '../pages/Gallery/images/Picture1.png'
import {BrowserRouter as Link} from 'react-router-dom'

export default function MatchCard({status}){
    return (
      <div className='MatchCard' style={{color:'white'}}>
        <p style={{marginBottom:'0.65rem'}}>16/01/24,08:00am</p>
        <div className='matchData'>
          <div style={{display:'flex',width:'7.5vw',justifyContent:'center'}}>
            <img className='hallImage' src={img1} alt="img"/>
            <div style={{textAlign:'center'}}>
              <h3 className='score'>160/8</h3>
              <p>(20.0)</p>
            </div>
          </div>
          <div style={{display:'flex',width:'7.5vw',justifyContent:'center'}}>
            <div style={{textAlign:'center'}}>
              <h3 className='score'>142/6</h3>
              <p>(20.0)</p>
            </div>
            <img className='hallImage' src={img1} alt="img"/>
          </div>
        </div>
        <div className='matchData'> 
          <h1>RK</h1>
          <h3 className='matchStatus'>{status.toUpperCase()}</h3>
          <h1>LBS</h1>
        </div>
        <p>RK Won the match by 60 runs</p>
        <p><span style={{fontWeight:'600',margin:'0.15rem'}}>Venue:</span>Tata Sports Complex</p>
        <p style={{color:'#0096FF'}}><Link to='/'>More details</Link></p>
      </div>
    )
}