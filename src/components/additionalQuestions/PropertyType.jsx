import React, { useState } from "react";
import "./PropertyType.style.css";
import RoofSlope from "./RoofSlope";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Grid, Icon, Popup, Image, Card } from "semantic-ui-react";

const PropertyType = (props) => {
  const [propertyType, setPropertyType] = useState("");
  const components = [<RoofSlope />];
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
                  <Grid id="propertyTypeMobile">
                    <input
                      type="hidden"
                      name="property_type"
                      value={propertyType}
                    />

                    <div id="propertyTypeQuestionDiv">
                      <p id="questionForPropertyType">
                        <img
                          id="propertyTypeQuestionImage"
                          src="/images/questionLogo.png"
                          alt="propertyType"
                        />{" "}
                        {""}
                        What type of property do you own?
                      </p>
                    </div>

                    <div id="propertyTypeDivMobile">
                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("detached")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">Detached</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>

                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("apartment")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">Apartment</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>

                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("semi/terraced")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">
                                Semi / Terraced
                              </p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>

                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("barn")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">Barn</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>
                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("commercial")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">Commercial</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>
                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("agricultural")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">
                                Agricultural
                              </p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>
                      <button
                        className="propertyTypeButtonIconsMobile"
                        id="propertyTypeIconMobile"
                        type="button"
                        onClick={() => setPropertyType("other")}
                        onMouseDown={async (e) => {
                          setIndex(0);
                        }}
                      >
                        <Card id="propertyTypeCardMobile" fluid>
                          <Grid.Row
                            id="propertyTypeCardGridRowMobile"
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
                              <p id="propertyTypeCardTextMobile">Other</p>
                            </Grid.Column>
                          </Grid.Row>
                        </Card>
                      </button>
                    </div>
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
                  </Grid>
                  <div>{components[index]}</div>
                </>
              )}
              {matches.desktop && (
                <>
                  <div id="propertyType">
                    <input
                      type="hidden"
                      name="property_type"
                      value={propertyType}
                    />
                    <Grid id="propertyTypeIcons">
                      <div id="propertyTypeQuestionDiv">
                        <p id="questionForPropertyType">
                          <img
                            id="propertyTypeQuestionImage"
                            src="/images/questionLogo.png"
                            alt="propertyType"
                          />{" "}
                          {""}
                          What type of property do you own?
                        </p>
                      </div>
                      <Grid.Row relaxed columns={4}>
                        <Grid.Column>
                          <Scrolllink
                            to="roofSlope"
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
                              className="propertyTypeButtonIcons"
                              id="houseIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("house");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/detached.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="apartmentIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("apartment");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/apartment.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="terracedSemiDetachedIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("terraced_semi_detached");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/semiTerraced.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="barnIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("barn");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/barn.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="commercialIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("commercial");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/commercial.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="agriculturalIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("agricultural");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/agricultural.png"
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
                            offset={0}
                            duration={1500}
                            onMouseDown={async (e) => {
                              setIndex(0);
                            }}
                          >
                            <button
                              className="propertyTypeButtonIcons"
                              id="otherPropertyIcon"
                              type="button"
                              onClick={() => {
                                setPropertyType("other");
                                setIndex(0);
                              }}
                            >
                              <img
                                className="imgPropertyTypeIcons"
                                src="/images/questionIcons/propertyType/other.png"
                                alt="other property"
                              />
                            </button>{" "}
                          </Scrolllink>{" "}
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    <Scrolllink
                      id="propertyTypeBack"
                      to="installationDate"
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
                            id="backToInstallationDateQ"
                          />
                        }
                        content="Go back to previous question"
                        inverted
                        position="bottom center"
                      />
                    </Scrolllink>
                    <Scrolllink
                      to="roofSlope"
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
                            id="skipToRoofSlopeQ"
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

export default PropertyType;
