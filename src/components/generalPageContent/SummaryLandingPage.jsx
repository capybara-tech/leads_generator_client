import React from "react";
import { Card, Button, List } from "semantic-ui-react";
import "./SummaryLandingPage.style.css";

const SummaryLandingPage = () => {
  return (
    <div id="summaryLandingPage">
      <Card.Group>
        <Card id="card1">
          <Card.Content>
            <Card.Header id="howItWorksCardTitle1">
              Get up to 3 Quotes
            </Card.Header>{" "}
            <br />
            <Card.Description id="howItWorksCardContent1">
              <List>
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content data-cy="content" className="content">
                    Our partners are MCS registered, vetted and we continue to
                    monitor their reviews
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content data-cy="content">
                    Compare competitive quotes with service
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content data-cy="content">
                    No obligation and free - we are against pushy sales
                    practices!
                  </List.Content>
                </List.Item>{" "}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Header id="howItWorksNumber1"><Button>Read more</Button></Card.Header>
            <br />
        </Card>
        <Card id="card2">
          <Card.Content>
            <Card.Header id="howItWorksCardTitle2">
              Help save our bruised planet
            </Card.Header>{" "}
            <br />
            <Card.Description id="howItWorksCardContent2">
              <List>
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content className="content">
                    Harvest infinite, truly clean (and free!) energy from the
                    sun
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Dramatically reduce your property's thirst for fossil fuels,
                    burnt to produce electricity
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Solar panels have no emissions and therefore zero climate
                    impact once installed
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Shrink you carbon footprint drastically overnight
                  </List.Content>
                </List.Item>{" "}
              </List>
            </Card.Description>{" "}
          </Card.Content>
          <Card.Header id="howItWorksNumber2"><Button>Read more</Button></Card.Header>
            <br />
        </Card>
        <Card id="card3">
          <Card.Content>
            <Card.Header id="howItWorksCardTitle3">
              Figures which won't disappoint
            </Card.Header>{" "}
            <br />
            <Card.Description id="howItWorksCardContent3">
              <List>
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Lower energy bills and sell excess electricity to the
                    National Grid
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Government grants and financial support are up for grabs
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Increases the value of your property
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    An impressive return on investment (ROI) and solar panel
                    prices have fallen by around 70% since 2010, quite a bargain
                    now!
                  </List.Content>
                </List.Item>{" "}
              </List>
            </Card.Description>{" "}
          </Card.Content>
          <Card.Header id="howItWorksNumber3"><Button>Read more</Button></Card.Header>
            <br />
        </Card>
        <Card id="card4">
          <Card.Content>
            <Card.Header id="howItWorksCardTitle4">
              How solar panels work
            </Card.Header>{" "}
            <br />
            <Card.Description id="howItWorksCardContent4">
              <List>
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Daylight (not only sunlight is required!) hits the solar
                    photovoltaic cells in the panels
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    Direct current (DC) electricity is produced
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    With a bit of magic, an inverter converts DC electricity to
                    alternating current electricity (AC)
                  </List.Content>
                </List.Item>{" "}
                <br />
                <List.Item className="solarBenefits">
                  <List.Icon name="check circle" />
                  <List.Content>
                    The energy can then be used in your property, excess sold to
                    the national grid or stored
                  </List.Content>
                </List.Item>{" "}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Header id="howItWorksNumber4"><Button>Read more</Button></Card.Header>
          <br />
        </Card>
      </Card.Group>
    </div>
  );
};

export default SummaryLandingPage;
