import React, { useEffect } from "react";
import "./FAQs.style.css";


const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="faqsContent">
        <h1 data-cy="title">Frequently asked questions</h1>
        <h3>Site currently under construction...</h3>
      </div>
    </>
  );
};

export default FAQs;
