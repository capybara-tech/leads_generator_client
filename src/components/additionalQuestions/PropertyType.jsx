import React, { useState } from "react";
import "./PropertyType.style.css";
import RoofSlope from "./RoofSlope";
import { Link as Scrolllink } from "react-scroll";
import { Grid } from "semantic-ui-react";

const PropertyType = (props) => {
  const [propertyType, setPropertyType] = useState("");
  const components = [<RoofSlope />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="propertyType">
        <input type="hidden" name="property_type" value={propertyType} />
        <Grid id="propertyTypeIcons">
          <h3 id="questionForPropertyType">
            What type of <span id="propertyWord">property</span> do you own?
          </h3>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="houseIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("house");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="house"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="apartmentIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("apartment");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="apartment"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="terracedSemiDetachedIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("terraced_semi_detached");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="terraced semi detached"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="barnIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("barn");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="barn"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row relaxed columns={3}>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="commercialIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("commercial");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="commercial"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="agriculturalIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("agricultural");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="agricultural"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="roofSlope"
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
                  className="buttonIcons"
                  id="otherPropertyIcon"
                  type="button"
                  onClick={() => {
                    setPropertyType("other");
                    setIndex(0);
                  }}
                >
                  <img
                    className="imgPropertyTypeIcons"
                    src="/images/dummylogo.png"
                    alt="other property"
                  />
                </button>{" "}
              </Scrolllink>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Scrolllink
          id="propertyTypeBack"
          to="installationDate"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-250}
          duration={1500}
        >
          <button id="backToInstallationDateQ">Back</button>
        </Scrolllink>
        <Scrolllink
          to="roofSlope"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        >
          <button id="skipToRoofSlopeQ">Skip</button>
        </Scrolllink>
        <button data-cy="button" type="submit" onClick={props.onSubmit}>
          Submit
        </button>
      </div>
      {components[index]}
    </>
  );
};

export default PropertyType;
