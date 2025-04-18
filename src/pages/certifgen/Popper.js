import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);
  const width = window.innerWidth;
  const height = window.innerHeight * 2;

  // Use a timeout or any condition to control when to stop the confetti
  useEffect(() => {
    const confettiTimeout = setTimeout(() => {
      setConfettiActive(false);
    }, 10000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(confettiTimeout);
  }, []); // The empty dependency array ensures that this effect runs only once

  return <>{isConfettiActive && <Confetti width={width} height={height} />}</>;
};

export default ConfettiComponent;
