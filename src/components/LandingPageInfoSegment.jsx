import React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";


const LandingPageInfoSegment = () => {
  return (
    <div>
      <Container id="landingPageInfoSegment">
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center">
              <Icon id="threeQuotes" name="sun" size="massive" />
              <h2 data-cy="title">Get up to 3 Quotes</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign="center">
              <Icon id="impactPlanet" name="sun" size="massive" />
              <h2 data-cy="title">How does this have an impact on the planet</h2>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque at quam{" "}
              </p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon id="impactWallet" name="sun" size="massive" />
              <h2 data-cy="title">How does this have an impact on your wallet</h2>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque at{" "}
              </p>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Icon id="howPanelsWork" name="sun" size="massive" />
              <h2 data-cy="title" >How do solar panels work?</h2>
              <p data-cy="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                eius? Maiores, impedit accusamus atque{" "}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default LandingPageInfoSegment;
