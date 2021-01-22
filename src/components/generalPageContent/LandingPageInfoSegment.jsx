import React from "react";
import { Link } from "react-router-dom";
import { Icon, Grid, List } from "semantic-ui-react";
import "./LandingPageInfoSegment.style.css";

const LandingPageInfoSegment = () => {
  return (
    <div id="infoSegment">
      <img id="imageOfTrees" src="/images/pinetrees.png" alt="trees" />
      <div id="midPageIcon">
        <Link
          to={{ pathname: "/quotes" }}
          id="quotesDiv"
          className="infoSegmentIcons"
        >
          <Icon
            id="threeQuotes"
            className="infoSegmentIcons"
            name="sun"
            size="massive"
          />
          <h3 data-cy="title">Get up to 3 Quotes</h3>
        </Link>
        <Grid.Column width={12}>
          <p data-cy="content">
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
                  No obligation and free - we are against pushy sales practices!
                </List.Content>
              </List.Item>{" "}
              <br />
            </List>
          </p>
        </Grid.Column>
      </div>
      <div id="boxWithIcons">
        <br />
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Link
                to={{ pathname: "/environment" }}
                id="planetDiv"
                className="infoSegmentIcons"
              >
                <Icon id="impactPlanet" name="sun" size="massive" />
              </Link>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3 data-cy="title" className="titles">
                Help save our bruised planet
              </h3>
              <p data-cy="content">
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
                      Dramatically reduce your property's thirst for fossil
                      fuels, burnt to produce electricity
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
                  <br />
                </List>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Link
                to={{ pathname: "/economics" }}
                id="walletDiv"
                className="infoSegmentIcons"
              >
                <Icon id="impactWallet" name="sun" size="massive" />
              </Link>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3 data-cy="title" className="titles">
                Figures which won't disappoint
              </h3>
              <p data-cy="content">
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
                      prices have fallen by around 70% since 2010, quite a
                      bargain now!
                    </List.Content>
                  </List.Item>{" "}
                  <br />
                </List>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Link
                to={{ pathname: "/howsolarworks" }}
                id="panelsWorkDiv"
                className="infoSegmentIcons"
              >
                <Icon id="howPanelsWork" name="sun" size="massive" />
              </Link>
            </Grid.Column>
            <Grid.Column width={12}>
              <h3 data-cy="title" className="titles">
                How solar panels work
              </h3>
              <p data-cy="content">
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
                      With a bit of magic, an inverter converts DC electricity
                      to alternating current electricity (AC)
                    </List.Content>
                  </List.Item>{" "}
                  <br />
                  <List.Item className="solarBenefits">
                    <List.Icon name="check circle" />
                    <List.Content>
                      The energy can then be used in your property, excess sold
                      to the national grid or stored
                    </List.Content>
                  </List.Item>{" "}
                  <br />
                </List>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPageInfoSegment;