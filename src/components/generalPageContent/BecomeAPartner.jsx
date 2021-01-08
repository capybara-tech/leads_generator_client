import React, { useEffect } from "react";
import "./BecomeAPartner.style.css";

const BecomeAPartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="becomeAPartnerContent">
      <h1 id="title" data-cy="title">Join #TEAMSOLSPANA</h1>
    </div>
  );
};

export default BecomeAPartner;