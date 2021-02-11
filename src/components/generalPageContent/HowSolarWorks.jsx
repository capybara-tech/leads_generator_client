import React, { useEffect } from "react";
import "./HowSolarWorks.style.css";
import Media from "react-media";
import { Card, Icon } from "semantic-ui-react";

const HowSolarWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <div id="howSolarWorksContent">
                  <p data-cy="title" id="howSolarWorksTitleMobile">
                    How do solar panels actually work?
                  </p>
                  <p id="howSolarWorksSubTitleMobile">
                    Lets keep it simple, like the process itself:
                  </p>
                  <Card.Group centered>
                    <Card id="howSolarWorksCard1">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber1Mobile">01</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle1">
                          Daylight
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent1">
                          Not only sunshine, daylight hits the solar
                          photovoltaic cells in the panels.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow1"
                            size="huge"
                            name="arrow circle down"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard2">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber2Mobile">02</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle2">
                          Electricity produced
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent2">
                          Direct current (DC) electricity is produced.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow2"
                            size="huge"
                            name="arrow circle down"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard3">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber3Mobile">03</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle3">
                          Conversion
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent3">
                          An inverter converts DC electricity to alternating
                          current electricity (AC).
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow3"
                            size="huge"
                            name="arrow circle down"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard4">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber4Mobile">04</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle4">
                          Utilise electricity
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent4">
                          The electricity can then be used in your property,
                          excess sold to the National Grid or stored.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow4"
                            size="huge"
                            name="check circle"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div>
              )}
              {matches.desktop && (
                <div id="howSolarWorksContent">
                  <h1 data-cy="title" id="howSolarWorksTitle">
                    How do solar panels actually work?
                  </h1>
                  <h3 id="howSolarWorksSubTitle">
                    Lets keep it simple, like the process itself:
                  </h3>
                  <Card.Group centered>
                    <Card id="howSolarWorksCard1">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber1">01</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle1">
                          Daylight
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent1">
                          Not only sunshine, daylight hits the solar
                          photovoltaic cells in the panels.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow1"
                            size="huge"
                            name="arrow circle right"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard2">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber2">02</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle2">
                          Electricity produced
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent2">
                          Direct current (DC) electricity is produced.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow2"
                            size="huge"
                            name="arrow circle right"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard3">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber3">03</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle3">
                          Conversion
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent3">
                          An inverter converts DC electricity to alternating
                          current electricity (AC).
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow3"
                            size="huge"
                            name="arrow circle right"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card id="howSolarWorksCard4">
                      <Card.Content>
                        <Card.Header id="howSolarWorksNumber4">04</Card.Header>
                        <br />
                        <Card.Header id="howSolarWorksCardTitle4">
                          Utilise electricity
                        </Card.Header>{" "}
                        <br />
                        <Card.Description id="howSolarWorksCardContent4">
                          The electricity can then be used in your property,
                          excess sold to the National Grid or stored.
                        </Card.Description>{" "}
                        <br /> <br /> <br />
                        <Card.Description>
                          <Icon
                            id="howSolarWorksArrow4"
                            size="huge"
                            name="arrow circle right"
                          />
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default HowSolarWorks;
