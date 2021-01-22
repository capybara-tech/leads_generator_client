import React, { useEffect } from "react";
import "./HowItWorks.style.css"

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="howItWorksContent">
      <h1 data-cy="title">The WATTSWHAT way</h1>
      <h3>Site currently under construction...</h3>
    </div>
  );
};

export default HowItWorks;