import React, { useState } from "react";
import RoofDirection from "./RoofDirection";
import "./RoofType.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid, Icon, Popup } from "semantic-ui-react";

const RoofType = (props) => {
  const [roofType, setRoofType] = useState("");
  const components = [<RoofDirection />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="roofType">
        <input type="hidden" name="roof_type" value={roofType} />
        <Grid id="roofTypeIcons">
          <h3 id="questionForRoofType">
            What <span id="typeOfRoofWording">type of roof</span> does the
            property have?
          </h3>

          <Grid.Row columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofDirection"
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
                  className="imgRoofTypeBtn"
                  id="tiledIcon"
                  type="button"
                  onClick={() => setRoofType("tiled")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/dummylogo.png"
                    alt="tiled"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDirection"
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
                  className="imgRoofTypeBtn"
                  id="feltIcon"
                  type="button"
                  onClick={() => setRoofType("felt")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/dummylogo.png"
                    alt="felt"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDirection"
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
                  className="imgRoofTypeBtn"
                  id="metalIcon"
                  type="button"
                  onClick={() => setRoofType("metal")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/dummylogo.png"
                    alt="metal"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>

            <Grid.Column>
              <Scrolllink
                to="roofDirection"
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
                  className="imgRoofTypeBtn"
                  id="asbestosIcon"
                  type="button"
                  onClick={() => setRoofType("asbestos")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/dummylogo.png"
                    alt="asbestos"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Scrolllink
                to="roofDirection"
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
                  className="imgRoofTypeBtn"
                  id="anotherIcon"
                  type="button"
                  onClick={() => setRoofType("another")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/dummylogo.png"
                    alt="another"
                  />
                </button>
              </Scrolllink>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Scrolllink
          to="roofSlope"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <Popup
            trigger={
              <Icon size="big" name="angle left" id="backToRoofSlopeQ" />
            }
            content="Go back to previous question"
            inverted
            position="bottom center"
          />
        </Scrolllink>
        <Scrolllink
          to="roofDirection"
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
              <Icon size="big" name="angle right" id="skipToRoofDirectionQ" />
            }
            content="Skip to next question"
            inverted
            position="bottom center"
          />
        </Scrolllink>
        <button
          id="submitButton"
          data-cy="button"
          type="submit"
          onClick={props.onSubmit}
        >
          Submit
        </button>
      </div>
      {components[index]}
    </>
  );
};

export default RoofType;