import React, { useState } from "react";
import RoofDimensions from "./RoofDimensions";
import "./RoofDirection.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Grid, Icon, Popup, Card, Image } from "semantic-ui-react";

const RoofDirection = (props) => {
  const [roofDirection, setRoofDirection] = useState("");
  const components = [<RoofDimensions />];
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
                <div id="roofDirection">
                  <input
                    type="hidden"
                    name="roof_direction"
                    value={roofDirection}
                  />
                  <Grid id="roofDirectionIconsMobile">
                    <div id="roofDirectionQuestionDiv">
                      <p id="questionForRoofDirection">
                        <img
                          id="roofDirectionQuestionImage"
                          src="/images/questionLogo.png"
                          alt="installationDate"
                        />{" "}
                        {""}
                        What's the direction of your roof?
                      </p>
                    </div>

                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("north")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/nMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">North</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("north east")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/neMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">North East</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("east")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/eMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">East</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("south east")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/seMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">South East</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("south")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/sMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">South</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("south west")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/swMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">South West</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("west")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/wMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">West</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <button
                      className="roofDirectionButtonIconsMobile"
                      id="roofDirectionIconMobile"
                      type="button"
                      onClick={() => setRoofDirection("north west")}
                      onMouseDown={async (e) => {
                        setIndex(0);
                      }}
                    >
                      <Card id="roofDirectionCardMobile" fluid>
                        <Grid.Row
                          id="roofDirectionCardGridRowMobile"
                          itemsPerRow={2}
                        >
                          <Grid.Column>
                            {" "}
                            <Image
                              floated={"left"}
                              src="/images/questionIcons/roofDirection/nwMobile.png"
                              className="roofDirectionImageMobile"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <p id="roofDirectionCardTextMobile">North West</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Card>
                    </button>
                    <Card id="roofDirectionCardMobile" fluid>
                      <Grid.Row
                        id="roofDirectionCardGridRowMobile"
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
                  </Grid>
                </div>
                <>{components[index]}</>
              </>
            )}
            {matches.desktop && (
              <>
                <div id="roofDirection">
                  <input
                    type="hidden"
                    name="roof_direction"
                    value={roofDirection}
                  />
                  <Grid id="roofDirectionIcons">
                    <div id="roofDirectionQuestionDiv">
                      <p id="questionForRoofDirection">
                        <img
                          id="roofDirectionQuestionImage"
                          src="/images/questionLogo.png"
                          alt="installationDate"
                        />{" "}
                        {""}
                        What's the direction of your roof?
                      </p>
                    </div>
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
                            className="roofDirectionButtonIcons"
                            id="northIcon"
                            type="button"
                            onClick={() => setRoofDirection("North")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/n.png"
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
                            className="roofDirectionButtonIcons"
                            id="northEastIcon"
                            type="button"
                            onClick={() => setRoofDirection("North East")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/ne.png"
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
                            className="roofDirectionButtonIcons"
                            id="eastIcon"
                            type="button"
                            onClick={() => setRoofDirection("East")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/e.png"
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
                            className="roofDirectionButtonIcons"
                            id="southEastIcon"
                            type="button"
                            onClick={() => setRoofDirection("South East")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/se.png"
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
                            className="roofDirectionButtonIcons"
                            id="southIcon"
                            type="button"
                            onClick={() => setRoofDirection("South")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/s.png"
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
                            className="roofDirectionButtonIcons"
                            id="southWestIcon"
                            type="button"
                            onClick={() => setRoofDirection("South West")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/sw.png"
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
                            className="roofDirectionButtonIcons"
                            id="westIcon"
                            type="button"
                            onClick={() => setRoofDirection("West")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/w.png"
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
                            className="roofDirectionButtonIcons"
                            id="northWestIcon"
                            type="button"
                            onClick={() => setRoofDirection("North West")}
                          >
                            <img
                              className="imgRoofDirectionIcons"
                              src="/images/questionIcons/roofDirection/nw.png"
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
                      trigger={
                        <Icon
                          size="big"
                          name="angle left"
                          id="backToRoofTypeQ"
                        />
                      }
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
                        <Icon
                          size="big"
                          name="angle right"
                          id="skipToRoofDimensionsQ"
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
                    content="You are now over half way through are you sure you want to submit now?"
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

export default RoofDirection;
