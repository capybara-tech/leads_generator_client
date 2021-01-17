import React, { useEffect } from "react";
import "./HowSolarWorks.style.css";

const HowSolarWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="howSolarWorksContent">
      <h1 data-cy="title">How does solar work?</h1>
      <h3>Site currently under construction...</h3>
    </div>
  );
};

export default HowSolarWorks;