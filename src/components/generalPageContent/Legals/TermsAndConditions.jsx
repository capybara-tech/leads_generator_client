import React, { useEffect } from 'react'
import "./TermsAndConditions.style.css";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="termsAndConditionsContent">
    <h1 data-cy="title">Terms and conditions</h1>
    <h3>Site currently under construction...</h3>
  </div>
  )
}

export default TermsAndConditions