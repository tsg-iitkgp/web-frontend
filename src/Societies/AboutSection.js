import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About :</h2>
      <p className="about-quote">
        "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past"
      </p>
      <p className="about-description">
        A student-run society that aims to spread awareness and educate students about the potential of Web 3.0 and 
        future technologies. We host workshops and hackathons to give students hands-on experience with Blockchain 
        Development and Artificial Intelligence. Additionally, we use our skills in web development and blockchain to 
        work on real-world projects linked to the student community at IIT Kharagpur. Being part of 
        KodeInKGP, students can gain valuable technical skills and contribute to solving important problems while 
        learning about one of the most exciting and rapidly-evolving technologies of our time.
      </p>
    </div>
  );
};

export default AboutSection;