import React, { useEffect } from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import "./Environment.style.css";
import { Grid, Image, Segment, Button } from "semantic-ui-react";

const Environment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="environmentContent">
      <div id="environmentBanner">
        <p data-cy="title" id="environmentTitle">
          Help save our bruised planet <br />
          <span id="titleEnvironmentEmphasis">install solar </span>
        </p>
        <p id="environmentSubHeader">
          ...one of the most effective ways to reduce your mucky emissions.
        </p>
        <TextLoop interval={1750}>
          <div>
            <p className="environmentalBenefits">
              Harvest infinite and clean energy from the sun
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Reduce your property's thirst for fossil fuels
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Zero climate impact once installed
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Shrink you carbon footprint overnight
            </p>
          </div>
        </TextLoop>
      </div>
      <Grid verticalAlign="middle" columns={2}>
        <Grid.Row id="environmentCategory">
          <Grid.Column>
            <p className="titleEnvironmentBenefit">
              Solar panels shrink your carbon dixiode(CO2) emissions
            </p>
            <p className="mainEnvironmentContent">
              By around 20%, a staggering 1.5 - 2 tonnes of CO2 a year. These
              numbers speak for themselves.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image id="footPrintImg" src="/images/HouseWithSolarPanels.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="environmentCategory">
          <Grid.Column>
            <Image id="fossilFuelsImg" src="/images/HouseWithSolarPanels.png" />
          </Grid.Column>
          <Grid.Column>
            <p className="titleEnvironmentBenefit">
              Fossil fuels are a menace to our environment
            </p>
            <p className="mainEnvironmentContent">
              An astonishing 50%* of UK electricity is produced from fossil
              fuels. Coal, oil and gas set ablaze to feed the grid and keep the
              lights on. Burning of these fossil fuels is the largest source of
              emissions of CO2 by humans, contributing to global warming. A
              worldwide emergency raising temperatures resulting in more
              droughts, increased fire threats, heat waves, water shortages and
              storm damage. Rising and warmer oceans and melting ice, harming
              sensitive ecosystems and destroying people's communities and
              livelihoods...the list goes on! Solar panels reduce your reliance
              on filthy fossil fuels.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="environmentParallax"></div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="environmentCategory">
          <Grid.Column>
            <p className="titleEnvironmentBenefit">
              Independence from the National Grid
            </p>
            <p className="mainEnvironmentContent">
              Feel comfort in knowing the source of your electricity - clean
              British daylight. You may be able to achieve total independence
              from the National Grid(powered by mountainous volumes of fossil
              fuels to meet the UK's electricity demand). The more electricity
              your solar panels generate, the less you have to potentially buy
              from the utility companies. A solar battery should get you through
              the night and achieve ultimate self-sufficieny! The UK has pledged
              to cut CO2 emissions by 80% by 2050, installing solar panels
              verges us closer to the target.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image
              id="independenceImg"
              src="/images/HouseWithSolarPanels.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="environmentCategory">
          <Grid.Column>
            <Image
              id="zeroEmissionsImg"
              src="/images/HouseWithSolarPanels.png"
            />
          </Grid.Column>
          <Grid.Column>
            <p className="titleEnvironmentBenefit">
              Solar panels generate zero emissions
            </p>
            <p className="mainEnvironmentContent">
              Once installed, they are busy producing clean electricity. With no
              toxins released into our already suffocated atmosphere, the panels
              are environmentally friendly.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment raised id="co2Comparsion"></Segment>
      <div id="environmentBottomBanner">
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <p id="environmentConclusion">
              Solar - the right choice to live 'greener' and protect the future of our planet.
              </p>
              <Button
                data-cy="button"
                as={Link}
                to={{ pathname: "/quotes" }}
                id="environmentQuoteButton"
              >
                Click to obtain 3 quotes
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Environment;