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
                    src="/images/questionIcons/roofType/tiles.png"
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
                    src="/images/questionIcons/roofType/felt.png"
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
                  id="zincIcon"
                  type="button"
                  onClick={() => setRoofType("zinc")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/questionIcons/roofType/zinc.png"
                    alt="zinc"
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
                  id="rubberIcon"
                  type="button"
                  onClick={() => setRoofType("EPDM(rubber)")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/questionIcons/roofType/rubber.png"
                    alt="EPDM(rubber)"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
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
                    src="/images/questionIcons/roofType/corrugatedMetal.png"
                    alt="another"
                  />
                </button>
              </Scrolllink>{" "}
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
                  id="anotherIcon"
                  type="button"
                  onClick={() => setRoofType("another")}
                >
                  <img
                    className="imgRoofTypeIcons"
                    src="/images/questionIcons/roofType/other.png"
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

export default RoofType;