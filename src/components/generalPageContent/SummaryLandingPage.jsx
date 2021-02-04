import React, { useEffect } from "react";
import { Card, Button, List, Menu, Grid, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./SummaryLandingPage.style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const SummaryLandingPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div id="summaryLandingPage">
      <Grid id="summaryCards">
        <Grid.Row>
          <Grid.Column>
            <Divider horizontal id="summaryTitle">
              WattsWhat in a nutshell
            </Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Group centered id="summaryCardGroup">
              <div id="threeQuotes" data-aos="fade-right">
                <Card id="summaryCard1">
                  <Card.Content>
                    <Card.Header data-cy="title" id="summaryTitle1">
                      Get up to 3 Quotes
                    </Card.Header>{" "}
                    <br />
                    <Card.Description id="summaryContent1">
                      <List>
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Our partners are MCS registered, vetted and we
                            continue to monitor their reviews
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Compare competitive quotes with service
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            No obligation and free - we are against pushy sales
                            practices!
                          </List.Content>
                        </List.Item>{" "}
                      </List>
                    </Card.Description>
                  </Card.Content>
                  <Menu.Item
                    id="cardButtonMenuItem1"
                    position="right"
                    as={Link}
                    to={{ pathname: "/quotes" }}
                    data-cy="button"
                  >
                    <Button id="cardButton1">Read More</Button>
                  </Menu.Item>
                  <br />
                </Card>
              </div>
              <div id="impactPlanet" data-aos="flip-left">
                <Card id="summaryCard2">
                  <Card.Content>
                    <Card.Header data-cy="title" id="summaryTitle2">
                      Help save our bruised planet
                    </Card.Header>{" "}
                    <br />
                    <Card.Description id="summaryContent2">
                      <List>
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content" className="content">
                            Harvest infinite, truly clean (and free!) energy
                            from the sun
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Dramatically reduce your property's thirst for
                            fossil fuels, burnt to produce electricity
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Solar panels have no emissions and therefore zero
                            climate impact once installed
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Shrink you carbon footprint drastically overnight
                          </List.Content>
                        </List.Item>{" "}
                      </List>
                    </Card.Description>{" "}
                  </Card.Content>
                  <Menu.Item
                    id="cardButtonMenuItem2"
                    position="right"
                    as={Link}
                    to={{ pathname: "/environment" }}
                    data-cy="button"
                  >
                    <Button id="cardButton2">Read More</Button>
                  </Menu.Item>
                  <br />
                </Card>
              </div>
              <div id="impactWallet" data-aos="flip-right">
                <Card id="summaryCard3">
                  <Card.Content>
                    <Card.Header data-cy="title" id="summaryTitle3">
                      Figures which won't disappoint
                    </Card.Header>{" "}
                    <br />
                    <Card.Description id="summaryContent3">
                      <List>
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Lower energy bills and sell excess electricity to
                            the National Grid
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Government grants and financial support are up for
                            grabs
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Increases the value of your property
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            An impressive return on investment (ROI) and solar
                            panel prices have fallen by around 70% since 2010,
                            quite a bargain now!
                          </List.Content>
                        </List.Item>{" "}
                      </List>
                    </Card.Description>{" "}
                  </Card.Content>
                  <Menu.Item
                    id="cardButtonMenuItem3"
                    position="right"
                    as={Link}
                    to={{ pathname: "/economics" }}
                    data-cy="button"
                  >
                    <Button id="cardButton3">Read More</Button>
                  </Menu.Item>
                  <br />
                </Card>
              </div>
              <div id="howPanelsWork" data-aos="fade-left">
                <Card id="summaryCard4">
                  <Card.Content>
                    <Card.Header data-cy="title" id="summaryTitle4">
                      How solar panels work
                    </Card.Header>{" "}
                    <br />
                    <Card.Description id="summaryContent4">
                      <List>
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Daylight (not only sunlight is required!) hits the
                            solar photovoltaic cells in the panels
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            Direct current (DC) electricity is produced
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            With a bit of magic, an inverter converts DC
                            electricity to alternating current electricity (AC)
                          </List.Content>
                        </List.Item>{" "}
                        <br />
                        <List.Item className="solarBenefits">
                          <List.Icon name="check" />
                          <List.Content data-cy="content">
                            The energy can then be used in your property, excess
                            sold to the national grid or stored
                          </List.Content>
                        </List.Item>{" "}
                      </List>
                    </Card.Description>
                  </Card.Content>
                  <Menu.Item
                    id="cardButtonMenuItem4"
                    position="right"
                    as={Link}
                    to={{ pathname: "/howsolarworks" }}
                    data-cy="button"
                  >
                    <Button id="cardButton4">Read More</Button>
                  </Menu.Item>
                  <br />
                </Card>
              </div>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SummaryLandingPage;