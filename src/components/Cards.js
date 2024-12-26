import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/components/card-modules.css"
export default function Cards(props) {
  return (
 
   
    <div className="cardContainer">
      <div className="imageCardDiv">
        <img src={`/data/media/images/societies/${props.shortform}.png`} loading="lazy" className="image" />
      </div>

      <div className="cardDiv">
        <h1 className="cardHeading">{props.name}</h1>
        <div className="cardDiv2" >
          <a href={props.facebook_link} target="_blank" className="link">
            {" "}
            <FaFacebook  />
          </a>
          <a href={props.instagram_link} target="_blank" className="link">
            <FaInstagram  />
          </a>
          <a href={props.linkedin_link} target="_blank" className="link">
            <FaLinkedin/>
          </a>
        </div>
      </div>
    </div>

  );
}
