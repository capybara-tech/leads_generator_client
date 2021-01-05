import React from "react";
import "./AboutUs.style.css";
import { Segment, Reveal } from "semantic-ui-react";
const AboutUs = () => {
  return (
    <>
      <div id="aboutUsContent">
        <div id="aboutUsBanner">
          <h1>About us.</h1>
        </div>
        <Segment id="aboutUsSegmentInfo">
          <div id="meetTheTeam">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div id="meetTheTeamVisible">
                  <h3>Meet the team</h3>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <div id="meetTheTeamHidden">
                  {" "}
                  <h4>Hello</h4>
                  <p>This is Alex</p>
                  <p>This is Felix</p>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div id="ourCharitys">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div id="ourCharitysVisible">
                  <h3>Our charitys</h3>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <div id="ourCharitysHidden">
                  {" "}
                  <h4>Hello</h4>
                  <p>This is one of our charitys</p>
                  <p>This is another charity</p>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div id="ourVision">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div id="ourVisionVisible">
                  <h3>Our vision </h3>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <div id="ourVisionHidden">
                  {" "}
                  <h4>Hello</h4>
                  <p>This is our vision</p>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>

          <div id="ourAims">
            <Reveal animated="fade">
              <Reveal.Content visible>
                <div id="ourAimsVisible">
                  {" "}
                  <h3>Our aims</h3>
                </div>
              </Reveal.Content>
              <Reveal.Content hidden>
                <div id="ourAimsHidden">
                  <h4>Hello</h4>
                  <p>This is our aims</p>
                </div>
              </Reveal.Content>
            </Reveal>
          </div>
        </Segment>
      </div>
    </>
  );
};

export default AboutUs;
