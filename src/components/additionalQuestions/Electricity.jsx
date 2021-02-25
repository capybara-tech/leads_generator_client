import React, { useState } from "react";
import { Field } from "react-final-form";
import "./Electricity.style.css";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Grid, Icon, Popup, Image, Card } from "semantic-ui-react";

const Electricity = (props) => {
  const [fuseSize, setFuseSize] = useState("");

  return (
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
              <div id="electricity">
                <input type="hidden" name="fuse_size" value={fuseSize} />
                <Grid id="fuseSizeIcons">
                  <div id="fuseSizeQuestionDiv">
                    <p id="questionAskingForElectricity">
                      <img
                        id="fuseSizeQuestionImage"
                        src="/images/questionLogo.png"
                        alt="fuse size question"
                      />{" "}
                      {""}
                      What is your main fuse size?
                    </p>
                  </div>
                  <button
                    className="fuseSizeButtonIconsMobile"
                    id="fuseSizeIconMobile"
                    type="button"
                    onClick={() => setFuseSize("30 amp")}
                  >
                    <Card id="fuseSizeCardMobile" fluid>
                      <Grid.Row id="fuseSizeCardGridRowMobile" itemsPerRow={2}>
                        <Grid.Column>
                          {" "}
                          <Image
                            floated={"left"}
                            src="/images/questionIcons/fuseSize/30Mobile.png"
                            className="fuseImageMobile"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p id="fuseSizeCardTextMobile">30 amp</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Card>
                  </button>
                  <button
                    className="fuseSizeButtonIconsMobile"
                    id="fuseSizeIconMobile"
                    type="button"
                    onClick={() => setFuseSize("60 amp")}
                  >
                    <Card id="fuseSizeCardMobile" fluid>
                      <Grid.Row id="fuseSizeCardGridRowMobile" itemsPerRow={2}>
                        <Grid.Column>
                          {" "}
                          <Image
                            floated={"left"}
                            src="/images/questionIcons/fuseSize/60Mobile.png"
                            className="fuseImageMobile"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p id="fuseSizeCardTextMobile">60 amp</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Card>
                  </button>
                  <button
                    className="fuseSizeButtonIconsMobile"
                    id="fuseSizeIconMobile"
                    type="button"
                    onClick={() => setFuseSize("80 amp")}
                  >
                    <Card id="fuseSizeCardMobile" fluid>
                      <Grid.Row id="fuseSizeCardGridRowMobile" itemsPerRow={2}>
                        <Grid.Column>
                          {" "}
                          <Image
                            floated={"left"}
                            src="/images/questionIcons/fuseSize/80Mobile.png"
                            className="fuseImageMobile"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p id="fuseSizeCardTextMobile">80 amp</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Card>
                  </button>
                  <button
                    className="fuseSizeButtonIconsMobile"
                    id="fuseSizeIconMobile"
                    type="button"
                    onClick={() => setFuseSize("80+ amp")}
                  >
                    <Card id="fuseSizeCardMobile" fluid>
                      <Grid.Row id="fuseSizeCardGridRowMobile" itemsPerRow={2}>
                        <Grid.Column>
                          {" "}
                          <Image
                            floated={"left"}
                            src="/images/questionIcons/fuseSize/80+Mobile.png"
                            className="fuseImageMobile"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <p id="fuseSizeCardTextMobile">80+ amp</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Card>
                  </button>
                  <Grid.Row relaxed columns={1}>
                    <Grid.Column textAlign={"left"}>
                      <h3 id="questionAskingForConsumption">
                        What is your yearly electricity consumption?
                      </h3>
                      <Field
                        id="fieldEnergyConsumptionMobile"
                        name="energy_consumption"
                        component="input"
                        type="number"
                        placeholder="Electricity consumption"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Card id="electricityCardMobile" fluid>
                    <Grid.Row
                      id="electricityCardGridRowMobile"
                      itemsPerRow={1}
                    >
                      <Grid.Column>
                        <button
                          className="submitButtonMobile"
                          data-cy="button"
                          type="submit"
                          onClick={props.onSubmit}
                        >
                          Submit
                        </button>
                      </Grid.Column>
                    </Grid.Row>
                  </Card>
                </Grid>
              </div>
            )}
            {matches.desktop && (
              <div id="electricity">
                <input type="hidden" name="fuse_size" value={fuseSize} />
                <Grid id="fuseSizeIcons">
                  <div id="fuseSizeQuestionDiv">
                    <p id="questionAskingForElectricity">
                      <img
                        id="fuseSizeQuestionImage"
                        src="/images/questionLogo.png"
                        alt="fuse size question"
                      />{" "}
                      {""}
                      What is your main fuse size?
                    </p>
                  </div>
                  <Grid.Row relaxed columns={4}>
                    <Grid.Column>
                      <button
                        className="fuseSizeButtonIcons"
                        id="16AIcon"
                        type="button"
                        onClick={() => setFuseSize("30 amps")}
                      >
                        <img
                          className="imgFuseSizeIcons"
                          src="/images/questionIcons/fuseSize/30.png"
                          alt="30 amps"
                        />
                      </button>
                    </Grid.Column>
                    <Grid.Column>
                      <button
                        className="fuseSizeButtonIcons"
                        id="20AIcon"
                        type="button"
                        onClick={() => setFuseSize("60 amps")}
                      >
                        <img
                          className="imgFuseSizeIcons"
                          src="/images/questionIcons/fuseSize/60.png"
                          alt="60 amps"
                        />
                      </button>
                    </Grid.Column>
                    <Grid.Column>
                      <button
                        className="fuseSizeButtonIcons"
                        id="25AIcon"
                        type="button"
                        onClick={() => setFuseSize("80 amps")}
                      >
                        <img
                          className="imgFuseSizeIcons"
                          src="/images/questionIcons/fuseSize/80.png"
                          alt="80 amps"
                        />
                      </button>
                    </Grid.Column>
                    <Grid.Column>
                      <button
                        className="fuseSizeButtonIcons"
                        id="35AOrAboveIcon"
                        type="button"
                        onClick={() => setFuseSize("80+ amps")}
                      >
                        <img
                          className="imgFuseSizeIcons"
                          src="/images/questionIcons/fuseSize/80+.png"
                          alt="80+ amps"
                        />
                      </button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row relaxed columns={1}>
                    <Grid.Column textAlign={"left"}>
                      <h3 id="questionAskingForConsumption">
                        What is your yearly electricity consumption?
                      </h3>
                      <Field
                        id="fieldEnergyConsumption"
                        name="energy_consumption"
                        component="input"
                        type="number"
                        placeholder="Electricity consumption"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                ¯
                <Scrolllink
                  to="roofDimensions"
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
                        id="backToRoofDimensionsQ"
                      />
                    }
                    content="Go back to previous question"
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
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default Electricity;
