import React, { useState } from "react";
import InstallationDate from "../additionalQuestions/InstallationDate";
import "./MidPageSubmitOrContinue.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Popup, Grid } from "semantic-ui-react";

const MidPageSubmitOrContinue = (props) => {
  const components = [<InstallationDate />];
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
                  <div id="midPageSubmitOrContinueMobile">
                    <div id="SubmitOrContinueDivMobile">
                      <div id="messageMidPageMobile">
                        <p id="midPageTitleMobile">
                          <span id="midPageWord">Awesome</span> you have reached
                          the mid point of becoming greener
                        </p>
                        <p id="midPageParagraphMobile">
                          From now on you just have to click some icons to get a
                          more accurate quote or you can choose to submit right
                          now{" "}
                        </p>
                        <Grid id="gridWithButtonsMobile" centered={true}>
                          <Grid.Row centered={true} columns={2}>
                            <Grid.Column textAlign={"left"}>
                              <Scrolllink
                                to="addressQuestion"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={1500}
                              >
                                <button id="backToAddressQMobile">Back</button>
                              </Scrolllink>
                            </Grid.Column>
                            
                            <Grid.Column textAlign={"right"}>
                              <Scrolllink
                                to="installationDate"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration={1500}
                                onMouseDown={async (e) => {
                                  setIndex(0);
                                }}
                              >
                                <button id="continueToIconsMobile">
                                  Next
                                </button>
                              </Scrolllink>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </div>
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
                        content="Are you sure you want to submit now there are only icons to click?"
                        inverted
                        position="top center"
                      />
                    </div>
                  </div>
                  <div>{components[index]}</div>
                </>
              )}
              {matches.desktop && (
                <>
                  <div id="midPageSubmitOrContinue">
                    <div id="SubmitOrContinueDiv">
                      <div id="messageMidPage">
                        <h3 id="midPageTitle">
                          <span id="midPageWord">Awesome</span> you have reached
                          the mid point of becoming greener
                        </h3>
                        <p>
                          From now on you just have to click some icons to get a
                          more accurate quote or you can choose to submit right
                          now{" "}
                        </p>
                        <Scrolllink
                          to="addressQuestion"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-0}
                          duration={1500}
                        >
                          <button id="backToAddressQ">Back</button>
                        </Scrolllink>
                        <Scrolllink
                          to="installationDate"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-0}
                          duration={1500}
                          onMouseDown={async (e) => {
                            setIndex(0);
                          }}
                        >
                          <button id="continueToIcons">Continue</button>
                        </Scrolllink>
                      </div>
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
                        content="Are you sure you want to submit now there are only icons to click?"
                        inverted
                        position="top center"
                      />
                    </div>
                  </div>
                  <div>{components[index]}</div>
                </>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default MidPageSubmitOrContinue;
