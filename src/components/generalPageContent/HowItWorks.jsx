import React, { useEffect } from "react";
import "./HowItWorks.style.css";
import Media from "react-media";
import { Card, Icon, Grid } from "semantic-ui-react";

const HowItWorks = () => {
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
                <div id="howItWorksContentMobile">
                  <p id="howItWorkssubTitleMobile">
                    Your environmental revolution in four easy steps
                  </p>
                  <p data-cy="title" id="howItWorksTitleMobile">
                    The WATTSWHAT way
                  </p>
                  <div id="howItWorksCardsMobile">
                    <Card.Group centered>
                      <Card id="card1Mobile">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber1Mobile">
                            01
                          </Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle1Mobile">
                            Request 3 quotes - no obligation and free!
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent1Mobile">
                            You will firstly answer a few easy questions about
                            your property. A heads up - give as much detail as
                            possible for a more accurate quote. <br /> <br />
                            We will connect you with selected partners across
                            the UK, every job's covered. <br /> <br />
                          </Card.Description>
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow1Mobile"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card2Mobile">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber2Mobile">
                            02
                          </Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle2Mobile">
                            Get quotes
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent2Mobile">
                            We'll pass your details to 3 installers who will be
                            in touch in lightning speed. <br /> <br />
                            There's a lot for our professionals to consider when
                            installing a solar panel system so its likely they
                            will arrange a mutually convenient time to check out
                            your property and to iron out any queries.
                          </Card.Description>{" "}
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow2Mobile"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card3Mobile">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber3Mobile">
                            03
                          </Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle3Mobile">
                            Choose your MCS professional
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent3Mobile">
                            Armed with quotes and recommendations you are all
                            set to choose your tradesman.
                            <br />
                            <br /> We are against pushy sales practices or
                            hidden costs!
                          </Card.Description>{" "}
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow3Mobile"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card4Mobile">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber4Mobile">
                            04
                          </Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle4Mobile">
                            Job complete
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent4Mobile">
                            Once your panels are up, it would be helpful if you
                            could drop us a line rating our partners
                            reliability, work and value for money. <br />
                            <br />
                            Feedback rewards good work and holds the installer
                            accountable for any (very rare)problems.
                          </Card.Description>
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow4Mobile"
                              size="huge"
                              name="check circle"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </div>
                  <Grid id="howItWorksconclusionDivMobile">
                    <p id="howItWorksconclusionMobile">
                      <br />
                      Save time, money & hassle - request your quotes
                    </p>
                  </Grid>
                </div>
              )}
              {matches.desktop && (
                <div id="howItWorksContent">
                  <h3 id="howItWorkssubTitle">
                    Your environmental revolution in four easy steps
                  </h3>
                  <h1 data-cy="title" id="howItWorksTitle">
                    The WATTSWHAT way
                  </h1>
                  <div id="howItWorksCards">
                    <Card.Group centered>
                      <Card id="card1">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber1">01</Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle1">
                            Request 3 quotes - no obligation and free!
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent1">
                            You will firstly answer a few easy questions about
                            your property. A heads up - give as much detail as
                            possible for a more accurate quote. <br /> <br />
                            We will connect you with selected partners across
                            the UK, every job's covered. <br /> <br />
                          </Card.Description>
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow1"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card2">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber2">02</Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle2">
                            Get quotes
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent2">
                            We'll pass your details to 3 installers who will be
                            in touch in lightning speed. <br /> <br />
                            There's a lot for our professionals to consider when
                            installing a solar panel system so its likely they
                            will arrange a mutually convenient time to check out
                            your property and to iron out any queries.
                          </Card.Description>{" "}
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow2"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card3">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber3">03</Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle3">
                            Choose your MCS professional
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent3">
                            Armed with quotes and recommendations you are all
                            set to choose your tradesman.
                            <br />
                            <br /> We are against pushy sales practices or
                            hidden costs!
                          </Card.Description>{" "}
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow3"
                              size="huge"
                              name="arrow circle right"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="card4">
                        <Card.Content>
                          <Card.Header id="howItWorksNumber4">04</Card.Header>
                          <br />
                          <Card.Header id="howItWorksCardTitle4">
                            Job complete
                          </Card.Header>{" "}
                          <br />
                          <Card.Description id="howItWorksCardContent4">
                            Once your panels are up, it would be helpful if you
                            could drop us a line rating our partners
                            reliability, work and value for money. <br />
                            <br />
                            Feedback rewards good work and holds the installer
                            accountable for any (very rare)problems.
                          </Card.Description>
                          <br />
                          <Card.Description>
                            <Icon
                              id="howItWorksArrow4"
                              size="huge"
                              name="check circle"
                            />
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </div>
                  <p id="howItWorksConclusion">
                    <br />
                    Save time, money & hassle - request your quotes
                  </p>
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default HowItWorks;