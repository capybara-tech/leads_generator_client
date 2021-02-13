import React, { useState } from "react";
import PropertyType from "./PropertyType";
import "./InstallationDate.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Grid, Icon, Popup, Card, Image } from "semantic-ui-react";

const InstallationDate = (props) => {
  const [timeFrame, setTimeFrame] = useState("");
  const components = [<PropertyType />];
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
                <Grid id="installationDateMobile">
                  <div id="installationDateQuestionDivMobile">
                    <p>
                      <img
                        id="installationQuestionImage"
                        src="/images/questionLogo.png"
                        alt="installationDate"
                      />{" "}
                      {""}
                      When are you looking for installation?
                    </p>

                    <Card.Group>
                      <Scrolllink
                        to="propertyType"
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
                          className="installationDateButtonIconsMobile"
                          id="zeroToThreeMonthsIconMobile"
                          type="button"
                          onClick={() => setTimeFrame("0-3 Months")}
                        >
                          <Card id="installationCard1" fluid>
                            <Grid.Row
                              id="installationCardGridRow1"
                              itemsPerRow={2}
                            >
                              <Grid.Column>
                                {" "}
                                <Image
                                  floated={"left"}
                                  src="/images/questionIcons/installationDate/felt.png"
                                  size={"tiny"}
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <p id="installationCardText1">0-3 Months</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Card>
                        </button>
                      </Scrolllink>
                      <Scrolllink
                        to="propertyType"
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
                          className="installationDateButtonIconsMobile"
                          id="zeroToThreeMonthsIconMobile"
                          type="button"
                          onClick={() => setTimeFrame("0-3 Months")}
                        >
                          <Card id="installationCard1" fluid>
                            <Grid.Row
                              id="installationCardGridRow1"
                              itemsPerRow={2}
                            >
                              <Grid.Column>
                                {" "}
                                <Image
                                  floated={"left"}
                                  src="/images/questionIcons/installationDate/felt.png"
                                  size={"tiny"}
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <p id="installationCardText1">3-6 Months</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Card>
                        </button>
                      </Scrolllink>
                      <Scrolllink
                        to="propertyType"
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
                          className="installationDateButtonIconsMobile"
                          id="zeroToThreeMonthsIconMobile"
                          type="button"
                          onClick={() => setTimeFrame("6-12 Months")}
                        >
                          <Card id="installationCard1" fluid>
                            <Grid.Row
                              id="installationCardGridRow1"
                              itemsPerRow={2}
                            >
                              <Grid.Column>
                                {" "}
                                <Image
                                  floated={"left"}
                                  src="/images/questionIcons/installationDate/felt.png"
                                  size={"tiny"}
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <p id="installationCardText1">6-12 Months</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Card>
                        </button>
                      </Scrolllink>
                      <Scrolllink
                        to="propertyType"
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
                          className="installationDateButtonIconsMobile"
                          id="zeroToThreeMonthsIconMobile"
                          type="button"
                          onClick={() => setTimeFrame("not sure")}
                        >
                          <Card id="installationCard1" fluid>
                            <Grid.Row
                              id="installationCardGridRow1"
                              itemsPerRow={2}
                            >
                              <Grid.Column>
                                {" "}
                                <Image
                                  floated={"left"}
                                  src="/images/questionIcons/installationDate/felt.png"
                                  size={"tiny"}
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <p id="installationCardText1">Not sure</p>
                              </Grid.Column>
                            </Grid.Row>
                          </Card>
                        </button>
                      </Scrolllink>
                    </Card.Group>
                  </div>
                </Grid>
              )}
              {matches.desktop && (
                <>
                  {" "}
                  <div id="installationDate">
                    <input
                      type="hidden"
                      name="installation_date"
                      value={timeFrame}
                    />
                    <Grid id="installationIcons">
                      <div id="installationDateQuestionDiv">
                        <p>
                          <img
                            id="installationQuestionImage"
                            src="/images/questionLogo.png"
                            alt="installationDate"
                          />{" "}
                          {""}
                          When are you looking for installation?
                        </p>
                      </div>
                      <Grid.Row relaxed columns={4}>
                        <Grid.Column>
                          <Scrolllink
                            to="propertyType"
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
                              className="installationDateButtonIcons"
                              id="zeroToThreeMonthsIcon"
                              type="button"
                              onClick={() => setTimeFrame("0-3 Months")}
                            >
                              <img
                                className="imgInstallationDateIcons"
                                src="/images/questionIcons/installationDate/0-3months.png"
                                alt="0-3 months"
                              />
                            </button>{" "}
                          </Scrolllink>
                        </Grid.Column>
                        <Grid.Column>
                          <Scrolllink
                            to="propertyType"
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
                              className="installationDateButtonIcons"
                              id="threeToSixMonthsIcon"
                              type="button"
                              onClick={() => setTimeFrame("3-6 Months")}
                            >
                              <img
                                className="imgInstallationDateIcons"
                                src="/images/questionIcons/installationDate/3-6months.png"
                                alt="3-6 months"
                              />
                            </button>{" "}
                          </Scrolllink>
                        </Grid.Column>
                        <Grid.Column>
                          <Scrolllink
                            to="propertyType"
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
                              className="installationDateButtonIcons"
                              id="sixToTwelveMonthsIcon"
                              type="button"
                              onClick={() => setTimeFrame("6-12 Months")}
                            >
                              <img
                                className="imgInstallationDateIcons"
                                src="/images/questionIcons/installationDate/6-12months.png"
                                alt="6-12 months"
                              />
                            </button>{" "}
                          </Scrolllink>
                        </Grid.Column>
                        <Grid.Column>
                          <Scrolllink
                            className="installationDateScrollLinks"
                            to="propertyType"
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
                              className="installationDateButtonIcons"
                              id="notSure"
                              type="button"
                              onClick={() => setTimeFrame("Not sure")}
                            >
                              <img
                                className="imgInstallationDateIcons"
                                src="/images/questionIcons/installationDate/notSureDates.png"
                                alt="Not sure"
                              />
                            </button>
                          </Scrolllink>
                        </Grid.Column>{" "}
                      </Grid.Row>
                    </Grid>
                    <br />
                    <Scrolllink
                      to="midPageSubmitOrContinue"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-0}
                      duration={1500}
                    >
                      <Popup
                        trigger={
                          <Icon
                            size="big"
                            name="angle left"
                            id="backToMidPageSubmitOrContinue"
                          />
                        }
                        content="Go back to previous question"
                        inverted
                        position="bottom center"
                      />
                    </Scrolllink>
                    <Scrolllink
                      id="installationDateSkip"
                      to="propertyType"
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
                            id="skipToPropertyTypeQ"
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
                      content="Are you sure you want to submit now?"
                      inverted
                      position="top center"
                    />
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

export default InstallationDate;