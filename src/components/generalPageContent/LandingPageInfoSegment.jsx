import React from "react";
import { Link } from "react-router-dom";
import { Icon, Grid } from "semantic-ui-react";
import "./LandingPageInfoSegment.style.css";

const LandingPageInfoSegment = () => {
  return (
    <div id="infoSegment">
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
      </div>
      <div id="boxWithIcons">
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
              <h3 data-cy="title">
                How does this have an impact on the planet
              </h3>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque at quam{" "}
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
              <h3 data-cy="title">
                How does this have an impact on your wallet
              </h3>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque at{" "}
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
              <h3 data-cy="title">How do solar panels work?</h3>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque{" "}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default LandingPageInfoSegment;
