import React from "react";
import "./AboutUs.style.css";
import { Segment } from "semantic-ui-react"
const AboutUs = () => {
  return (
    <>
      <div id="aboutUsContent">
        <div id="aboutUsBanner">
          <h1>About us.</h1>
        </div>
        <Segment id="aboutUsSegmentInfo">
          <div id="meetTheTeam">
            <h3>Meet the team</h3>
          </div>
          <div id="ourCharitys">
            <h3>Our charitys</h3>
          </div>
          <div id="ourVision">
            <h3>Our vision </h3>
          </div>
          <div id="ourAims">
            <h3>Our aims</h3>
          </div>
        </Segment>
      </div>
    </>
  );
};

export default AboutUs;
