import React, { useState } from "react";
import RoofDimensions from "./RoofDimensions";
import "./RoofDirection.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid, Icon, Popup } from "semantic-ui-react";

const RoofDirection = (props) => {
  const [roofDirection, setRoofDirection] = useState("");
  const components = [<RoofDimensions />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="roofDirection">
        <input type="hidden" name="roof_direction" value={roofDirection} />
        <Grid id="roofDirectionIcons">
          <h3 id="questionForRoofDirection">
            What's the <span id="directionWord">direction</span> of your roof?
          </h3>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="northIcon"
                  type="button"
                  onClick={() => setRoofDirection("North")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="North°"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="northEastIcon"
                  type="button"
                  onClick={() => setRoofDirection("North East")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="North East"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="eastIcon"
                  type="button"
                  onClick={() => setRoofDirection("East")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="East"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="southEastIcon"
                  type="button"
                  onClick={() => setRoofDirection("South East")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="South East"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="southIcon"
                  type="button"
                  onClick={() => setRoofDirection("South")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="South"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="southWestIcon"
                  type="button"
                  onClick={() => setRoofDirection("South West")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="South West"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="westIcon"
                  type="button"
                  onClick={() => setRoofDirection("West")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="West"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofDimensions"
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
                  id="northWestIcon"
                  type="button"
                  onClick={() => setRoofDirection("North West")}
                >
                  <img
                    className="imgRoofDirectionIcons"
                    src="/images/dummylogo.png"
                    alt="North West"
                  />
                </button>{" "}
              </Scrolllink>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Scrolllink
          to="roofType"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <Popup
            trigger={<Icon size="big" name="angle left" id="backToRoofTypeQ" />}
            content="Go back to previous question"
            inverted
            position="bottom center"
          />
        </Scrolllink>
        <Scrolllink
          to="roofDimensions"
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
              <Icon size="big" name="angle right" id="skipToRoofDimensionsQ" />
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
export default RoofDirection;