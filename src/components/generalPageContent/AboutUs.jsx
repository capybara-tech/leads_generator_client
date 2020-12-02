import React from "react";
import "./AboutUs.style.css";
import AddressSearch from "../mandatoryQuestions/AddressSearch";

const AboutUs = () => {
  return (
    <>
      <div id="aboutUsContent">
        <h1 data-cy="title">About us</h1>
        <h3>Site currently under construction...</h3>
        <AddressSearch />
      </div>
    </>
  );
};

export default AboutUs;
