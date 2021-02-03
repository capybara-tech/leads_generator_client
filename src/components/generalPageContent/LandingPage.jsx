import React, { useEffect } from "react";
import EnvironmentSectionLandingPage from "./EnvironmentSectionLandingPage";
import HeroPage from "./HeroPage";
import SummaryLandingPage from "./SummaryLandingPage";
import { Grid } from "semantic-ui-react"
import "./LandingPage.style.css"

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row id="heroLandingPageSection">
          <HeroPage />
        </Grid.Row>
        <Grid.Row id="environmentalLandingPageSection">
          <EnvironmentSectionLandingPage />
        </Grid.Row>
        <Grid.Row id="summaryLandingPageSection">
          <SummaryLandingPage />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default LandingPage;
