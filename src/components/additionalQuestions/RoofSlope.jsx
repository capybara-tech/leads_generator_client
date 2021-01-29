import React, { useState } from "react";
import RoofType from "./RoofType";
import "./RoofSlope.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid, Icon, Popup } from "semantic-ui-react";

const RoofSlope = (props) => {
  const [roofSlope, setRoofSlope] = useState("");
  const components = [<RoofType />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="roofSlope">
        <input type="hidden" name="roof_slope" value={roofSlope} />
        <Grid id="roofSlopeIcons">
          <div id="roofSlopeQuestionDiv">
            <p id="questionForRoofSlope">
              <img
                id="roofSlopeQuestionImage"
                src="/images/questionLogo.png"
                alt="installationDate"
              />{" "}
              {""}
              What's the slope of your roof?
            </p>
          </div>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="roofSlopeButtonIcons"
                  id="zeroToFiveDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("0-5°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/questionIcons/roofSlope/flatRoof.png"
                    alt="0-5°"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="roofSlopeButtonIcons"
                  id="fiveToTwentyDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("5-20°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/questionIcons/roofSlope/lowPitchRoof.png"
                    alt="5-20°"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="roofSlopeButtonIcons"
                  id="twentyToFortyDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("20-40°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/questionIcons/roofSlope/ordinaryRoof.png"
                    alt="20-40°"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="roofSlopeButtonIcons"
                  id="fortyDegreesPlusIcon"
                  type="button"
                  onClick={() => setRoofSlope("40°+")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/questionIcons/roofSlope/steepRoof.png"
                    alt="40°+"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row relaxed columns={1}>
            <Grid.Column>
              <p id="exactRoofSlopeQ">
                If you know your exact roof slope please enter it below
              </p>
              <input
                id="fieldSlope"
                component="input"
                type="number"
                placeholder="Exact roof slope"
                onChange={(e) => setRoofSlope(e.target.value)}
              ></input>

              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button id="nextToRoofTypeQ">Next</button>
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br />
        <Scrolllink
          to="propertyType"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <Popup
            trigger={
              <Icon size="big" name="angle left" id="backToPropertyTypeQ" />
            }
            content="Go back to previous question"
            inverted
            position="bottom center"
          />
        </Scrolllink>
        <Scrolllink
          to="roofType"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        >
          <Popup
            trigger={
              <Icon size="big" name="angle right" id="skipToRoofTypeQ" />
            }
            content="Skip to next question"
            inverted
            position="bottom center"
          />
        </Scrolllink>
        <Popup
          trigger={
            <button
              id="submitButton"
              data-cy="button"
              type="submit"
              onClick={props.onSubmit}
            >
              Submit
            </button>
          }
          content="Are you sure you want to submit now?"
          inverted
          position="top center"
        />
      </div>
      {components[index]}
    </>
  );
};

export default RoofSlope;