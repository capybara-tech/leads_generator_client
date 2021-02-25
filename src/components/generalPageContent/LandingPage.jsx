import React, { useEffect } from "react";
import EnvironmentSectionLandingPage from "./EnvironmentSectionLandingPage";
import HeroPage from "./HeroPage";
import SummaryLandingPage from "./SummaryLandingPage";
import { Grid } from "semantic-ui-react";
import Media from "react-media";
import "./LandingPage.style.css";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div>
                <Grid>
                  <Grid.Row id="heroLandingPageSectionMobile">
                    <HeroPage />
                  </Grid.Row>
                  <Grid.Row id="environmentalLandingPageSectionMobile">
                    <EnvironmentSectionLandingPage />
                  </Grid.Row>
                  <Grid.Row id="summaryLandingPageSectionMobile">
                    <SummaryLandingPage />
                  </Grid.Row>
                </Grid>
              </div>
            )}
            {matches.desktop && (
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
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default LandingPage;
