import React, { useState } from "react";
import RoofType from "./RoofType";
import "./RoofSlope.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid } from "semantic-ui-react";

const RoofSlope = () => {
  const [roofSlope, setRoofSlope] = useState("");
  const components = [<RoofType />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="roofSlope">
        <input type="hidden" name="roof_slope" value={roofSlope} />
        <Grid id="roofSlopeIcons">
          <h2 id="questionForRoofSlope">
            What's the <span id="slopeWord">slope</span> of your roof?
          </h2>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  id="zeroToFiveDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("0-5°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/dummylogo.png"
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
                offset={-30}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  id="fiveToTwentyDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("5-20°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/dummylogo.png"
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
                offset={-30}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  id="twentyToFortyDegreesIcon"
                  type="button"
                  onClick={() => setRoofSlope("20-40°")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/dummylogo.png"
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
                offset={-30}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  id="fortyDegreesPlusIcon"
                  type="button"
                  onClick={() => setRoofSlope("40°+")}
                >
                  <img
                    className="imgRoofSlopeIcons"
                    src="/images/dummylogo.png"
                    alt="40°+"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row relaxed columns={1}>
            <Grid.Column>
              <p id="exactRoofSlopeQ">If you know your exact roof slope please enter it below</p>
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
                offset={-30}
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
          offset={-30}
          duration={1500}
        >
          <button id="backToPropertyTypeQ">Back</button>
        </Scrolllink>
        <Scrolllink
          to="roofType"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        >
          <button id="skipToRoofTypeQ">Skip</button>
        </Scrolllink>
      </div>
      {components[index]}
    </>
  );
};

export default RoofSlope;
