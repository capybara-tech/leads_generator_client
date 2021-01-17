import React, { useEffect } from "react";
import "./Environment.style.css"

const Environment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="environmentContent" >
      <h1 data-cy="title">How does this have an impact on the planet</h1>
      <h3>Site currently under construction...</h3>
    </div>
  );
};

export default Environment;