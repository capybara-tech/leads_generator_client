import React, { useState } from "react";
import { Field } from "react-final-form";
import Electricity from "./Electricity";
import "./RoofDimensions.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Icon, Popup, Grid } from "semantic-ui-react";

const RoofDimensions = (props) => {
  const components = [<Electricity />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div>
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
                  {" "}
                  <div id="roofDimensionsMobile">
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
                    <div id="roofDimensionsQuestionMobile">
                      <Field
                        id="fieldRoofWidthMobile"
                        name="roof_width"
                        component="input"
                        type="number"
                        placeholder="1. Roof height"
                      />
                      <Field
                        id="fieldRoofLengthMobile"
                        name="roof_length"
                        component="input"
                        type="number"
                        placeholder="2. Roof length"
                      />
                      <Field
                        id="fieldGutterHeightMobile"
                        name="gutter_height"
                        component="input"
                        type="number"
                        placeholder="3. Gutter height"
                      />
                      <Grid id="gridWithButtonsMobile" centered={true}>
                        <Grid.Row columns="3">
                          <Grid.Column>
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
                          </Grid.Column>
                          <Grid.Column>
                            <button
                            type="button"
                              onMouseDown={async (e) => {
                                setIndex(0);
                              }}
                              id="nextQuestionMobile"
                            >
                              Skip
                            </button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </div>
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
      </div>
    </>
  );
};

export default RoofDimensions;
