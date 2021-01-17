import React, { useEffect } from 'react'
import "./PrivacyPolicy.style.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="privacyPolicyContent">
    <h1 data-cy="title">Privacy policy</h1>
    <h3>Site currently under construction...</h3>
  </div>
  )
}

export default PrivacyPolicy
