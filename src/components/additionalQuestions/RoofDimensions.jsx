import React, { useState } from "react";
import { Field } from "react-final-form";
import Electricity from "./Electricity";
import "./RoofDimensions.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Icon, Popup, Grid, Card } from "semantic-ui-react";

const RoofDimensions = (props) => {
  const components = [<Electricity />];
  const [index, setIndex] = useState("");

  return (
    <>
      <Media
        queries={{
          mobile: "(max-width: 599px)",
          desktop: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <>
                <Grid id="roofDimensionsMobile">
                  <Grid.Row id="topRowWithImage">
                    <p id="roofDimensionsQuestionMobile">
                      <img
                        id="roofDimensionsQuestionImage"
                        src="/images/questionLogo.png"
                        alt="roof dimensions question"
                      />{" "}
                      What's your roof dimension?
                    </p>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Field
                        id="fieldRoofWidthMobile"
                        name="roof_width"
                        component="input"
                        type="number"
                        placeholder="1. Roof height"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Field
                        id="fieldRoofLengthMobile"
                        name="roof_length"
                        component="input"
                        type="number"
                        placeholder="2. Roof length"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Field
                        id="fieldGutterHeightMobile"
                        name="gutter_height"
                        component="input"
                        type="number"
                        placeholder="3. Gutter height"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Card id="installationCardMobile" fluid>
                    <Grid.Row
                      id="installationCardGridRowMobile"
                      itemsPerRow={1}
                    >
                      <Grid.Column>
                        <Popup
                          trigger={
                            <button
                              className="submitButtonMobile"
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
                        <button
                          type="button"
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                          id="nextQuestionMobile"
                        >
                          Skip question
                        </button>
                      </Grid.Column>
                    </Grid.Row>
                  </Card>
                </Grid>{" "}
                <>{components[index]}</>
              </>
            )}
            {matches.desktop && (
              <>
                {" "}
                <div id="roofDimensions">
                  <div id="roofDimensionsQuestionDiv">
                    <p id="questionAskingForRoofDimensions">
                      <img
                        id="roofDimensionsQuestionImage"
                        src="/images/questionLogo.png"
                        alt="roof dimensions question"
                      />{" "}
                      What's your roof dimension?
                    </p>
                  </div>
                  <Field
                    id="fieldGutterHeight"
                    name="gutter_height"
                    component="input"
                    type="number"
                    placeholder="Gutter height"
                  />
                  <Field
                    id="fieldRoofWidth"
                    name="roof_width"
                    component="input"
                    type="number"
                    placeholder="Roof height"
                  />
                  <Field
                    id="fieldRoofLength"
                    name="roof_length"
                    component="input"
                    type="number"
                    placeholder="Roof length"
                  />
                  <Scrolllink
                    id="nextToElectricity"
                    to="electricity"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onMouseDown={async (e) => {
                      setIndex(0);
                    }}
                  >
                    <button id="nextToElectricityQ">Next</button>
                  </Scrolllink>
                  <br />
                  <Scrolllink
                    to="roofDirection"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                  >
                    <Popup
                      trigger={
                        <Icon
                          size="big"
                          name="angle left"
                          id="backToRoofDirectionQ"
                        />
                      }
                      content="Go back to previous question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                  <Scrolllink
                    to="electricity"
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
                        <Icon
                          size="big"
                          name="angle right"
                          id="skipToElectricityQ"
                        />
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
                    content="Only one question to go, are you sure you want to submit now?"
                    inverted
                    position="top center"
                  />
                </div>
                <>{components[index]}</>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default RoofDimensions;
