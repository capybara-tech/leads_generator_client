import React, { useEffect } from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import "./Environment.style.css";
import Media from "react-media";
import { Grid, Image, Segment, Button } from "semantic-ui-react";

const Environment = () => {
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
              <div id="environmentContentMobile">
                <div id="environmentBannerMobile">
                  <h1 data-cy="title" id="environmentTitleMobile">
                    Help save our bruised planet <br />
                    <span id="titleEnvironmentEmphasis">install solar </span>
                  </h1>
                  <p id="environmentSubHeaderMobile">
                    ...one of the most effective ways to reduce your mucky
                    emissions
                    <span aria-label="" role="img">
                      💪
                    </span>
                    . Sleep easy knowing you are making a genuine difference
                    <span aria-label="" role="img">
                      🎯
                    </span>{" "}
                    to the environment.
                  </p>
                  <TextLoop interval={1750}>
                    <div>
                      <p className="environmentalBenefitsMobile">
                        Harvest infinite and clean energy from<br/> the sun
                      </p>
                    </div>
                    <div>
                      <p className="environmentalBenefitsMobile">
                        Reduce your property's thirst for fossil fuels
                      </p>
                    </div>
                    <div>
                      <p className="environmentalBenefitsMobile">
                        Zero climate impact once installed
                      </p>
                    </div>
                    <div>
                      <p className="environmentalBenefitsMobile">
                        Shrink your carbon footprint overnight
                      </p>
                    </div>
                  </TextLoop>
                </div>
                <Grid
                  id="environmentalInformationSectionMobile"
                  verticalAlign="middle"
                  columns={1}
                >
                  <Grid.Row>
                    <Grid.Column>
                      <Image id="footPrintImg" src="/images/LowerCo2.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <p className="titleEnvironmentBenefitMobile">
                        Solar panels shrink your carbon dioxide(CO2) emissions
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        By 20%, a staggering{" "}
                        <span className="environmentHighlightedWord">
                          1.5 - 2 tonnes of CO2 a year.
                        </span>{" "}
                        These numbers speak for themselves!
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Image
                        id="fossilFuelsImg"
                        src="/images/fossilfuels.png"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <p className="titleEnvironmentBenefitMobile">
                        Fossil fuels are a menace to our environment
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        An astonishing{" "}
                        <span className="environmentHighlightedWord">
                          50%* of UK electricity is produced from fossil fuels.
                        </span>{" "}
                        Coal, oil and gas set ablaze to feed the grid and keep
                        the lights on.{" "}
                        <span className="environmentHighlightedWord">
                          Burning these fossil fuels is the largest source of
                          emissions of CO2 by humans
                        </span>
                        , contributing to global warming.{" "}
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        A worldwide emergency raising temperatures resulting in
                        more droughts, increased fire threats, heat waves, water
                        shortages and storm damage. Rising and warmer oceans and
                        melting ice, harming sensitive ecosystems and destroying
                        people's communities and livelihoods...the list goes on!
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        Solar panels reduce your reliance on filthy fossil
                        fuels.
                      </p>
                      <p id="environmentCondition">*on average</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Column>
                    <Image
                      id="independenceImg"
                      src="/images/CleanBritishSun.png"
                    />
                  </Grid.Column>
                  <Grid.Row>
                    <Grid.Column>
                      {" "}
                      <p className="titleEnvironmentBenefitMobile">
                        Independence from the National Grid
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        Feel comfort in knowing the source of your electricity -{" "}
                        <span className="environmentHighlightedWord">
                          clean British daylight.
                        </span>
                      </p>{" "}
                      <p className="mainEnvironmentContentMobile">
                        You may be able to{" "}
                        <span className="environmentHighlightedWord">
                          achieve total independence from the National Grid
                        </span>
                        (powered by mountainous volumes of fossil fuels to meet
                        the UK's electricity demand). The more electricity your
                        solar panels generate, the less you have to potentially
                        buy from the utility companies. A solar battery should
                        get you through the night and achieve ultimate
                        self-sufficieny!{" "}
                      </p>{" "}
                      <p className="mainEnvironmentContentMobile">
                        The UK has pledged to cut CO2 emissions by 80% by 2050,
                        installing solar panels verges us closer to the target.
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      {" "}
                      <Image
                        id="zeroEmissionsImg"
                        src="/images/HouseWithSolarPanels.png"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      {" "}
                      <p className="titleEnvironmentBenefitMobile">
                        Solar panels generate zero emissions
                      </p>
                      <p className="mainEnvironmentContentMobile">
                        Once installed, they are busy producing clean
                        electricity. With no toxins released into our already
                        suffocated atmosphere, the{" "}
                        <span className="environmentHighlightedWord">
                          panels are environmentally friendly.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Segment raised id="environmentBottomBannerSegment">
                  <Grid>
                    <Grid.Row>
                      <p id="co2PerspectiveMobile">
                        Let's put 2 tonnes of Co2 into perspective
                      </p>
                    </Grid.Row>
                    <Grid.Row>
                      <p className="questionInCo2SegmentMobile">
                        iPhones charged/year? <br />- <span className="numbersMobile">255,064</span> times
                      </p>
                    </Grid.Row>
                    <Grid.Row>
                      <p className="questionInCo2SegmentMobile">
                        Train journeys?
                        <br />- <span className="numbersMobile">3.5</span> times around the globe!
                      </p>
                    </Grid.Row>
                    <Grid.Row>
                      <p className="questionInCo2SegmentMobile">
                        Amount of coal burned? <br />- <span className="numbersMobile">1,000</span> kg
                      </p>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <Grid id="environmentalBottomBannerMobile">
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <p id="environmentConclusionMobile">
                        Solar - the right choice to live 'greener' and protect
                        the future of our planet.
                      </p>
                      <Button
                        data-cy="button"
                        as={Link}
                        to={{ pathname: "/quotes" }}
                        id="environmentQuoteButton"
                      >
                        get up to 3 quotes
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            )}
            {matches.desktop && (
              <div id="environmentContent">
                <div id="environmentBanner">
                  <h1 data-cy="title" id="environmentTitle">
                    Help save our bruised planet <br />
                    <span id="titleEnvironmentEmphasis">install solar </span>
                  </h1>
                  <p id="environmentSubHeader">
                    ...one of the most effective ways to reduce your mucky
                    emissions
                    <span aria-label="" role="img">
                      💪
                    </span>
                    . Sleep easy knowing you are making a genuine difference
                    <span aria-label="" role="img">
                      🎯
                    </span>{" "}
                    to the environment.
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
                        Shrink your carbon footprint overnight
                      </p>
                    </div>
                  </TextLoop>
                </div>
                <Grid verticalAlign="middle" columns={2}>
                  <Grid.Row id="environmentCategory">
                    <Grid.Column>
                      <p className="titleEnvironmentBenefit">
                        Solar panels shrink your carbon dioxide(CO2) emissions
                      </p>
                      <p className="mainEnvironmentContent">
                        By 20%, a staggering{" "}
                        <span className="environmentHighlightedWord">
                          1.5 - 2 tonnes of CO2 a year.
                        </span>{" "}
                        These numbers speak for themselves!
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Image id="footPrintImg" src="/images/LowerCo2.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id="environmentCategory">
                    <Grid.Column>
                      <Image
                        id="fossilFuelsImg"
                        src="/images/fossilfuels.png"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <p className="titleEnvironmentBenefit">
                        Fossil fuels are a menace to our environment
                      </p>
                      <p className="mainEnvironmentContent">
                        An astonishing{" "}
                        <span className="environmentHighlightedWord">
                          50%* of UK electricity is produced from fossil fuels.
                        </span>{" "}
                        Coal, oil and gas set ablaze to feed the grid and keep
                        the lights on.{" "}
                        <span className="environmentHighlightedWord">
                          Burning these fossil fuels is the largest source of
                          emissions of CO2 by humans
                        </span>
                        , contributing to global warming.{" "}
                      </p>
                      <p className="mainEnvironmentContent">
                        A worldwide emergency raising temperatures resulting in
                        more droughts, increased fire threats, heat waves, water
                        shortages and storm damage. Rising and warmer oceans and
                        melting ice, harming sensitive ecosystems and destroying
                        people's communities and livelihoods...the list goes on!
                      </p>
                      <p className="mainEnvironmentContent">
                        Solar panels reduce your reliance on filthy fossil
                        fuels.
                      </p>
                      <p id="environmentCondition">*on average</p>
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
                        Feel comfort in knowing the source of your electricity -{" "}
                        <span className="environmentHighlightedWord">
                          clean British daylight.
                        </span>
                      </p>{" "}
                      <p className="mainEnvironmentContent">
                        You may be able to{" "}
                        <span className="environmentHighlightedWord">
                          achieve total independence from the National Grid
                        </span>
                        (powered by mountainous volumes of fossil fuels to meet
                        the UK's electricity demand). The more electricity your
                        solar panels generate, the less you have to potentially
                        buy from the utility companies. A solar battery should
                        get you through the night and achieve ultimate
                        self-sufficieny!{" "}
                      </p>{" "}
                      <p className="mainEnvironmentContent">
                        The UK has pledged to cut CO2 emissions by 80% by 2050,
                        installing solar panels verges us closer to the target.
                      </p>
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        id="independenceImg"
                        src="/images/CleanBritishSun.png"
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
                        Once installed, they are busy producing clean
                        electricity. With no toxins released into our already
                        suffocated atmosphere, the{" "}
                        <span className="environmentHighlightedWord">
                          panels are environmentally friendly.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <p id="titleCo2Segment">
                  Hover over the questions to{" "}
                  <span id="co2Hightlight">
                    put 2 tonnes of Co2 into perspective:
                  </span>
                </p>
                <Segment raised id="co2Comparsion">
                  <Grid>
                    <Grid.Row id="co2ComparisonGridRow">
                      <Grid.Column id="questionOneColumn">
                        <div id="revealQuestionOneAnswer">
                          <p className="questionInCo2Segment">
                            iPhones charged/year?
                          </p>
                          <p id="answerQuestionOne">255,064 times</p>
                        </div>
                      </Grid.Column>
                      <Grid.Column id="questionTwoColumn">
                        <div id="revealQuestionTwoAnswer">
                          <p className="questionInCo2Segment">Train journey?</p>
                          <p id="answerQuestionTwo">
                            3.5 times around the globe!
                          </p>
                        </div>
                      </Grid.Column>
                      <Grid.Column id="questionThreeColumn">
                        <div id="revealQuestionThreeAnswer">
                          <p className="questionInCo2Segment">
                            Amount of coal burned?
                          </p>
                          <p id="answerQuestionThree">1,000 kg</p>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
                <div id="environmentBottomBanner">
                  <Grid>
                    <Grid.Row columns={1}>
                      <Grid.Column>
                        <p id="environmentConclusion">
                          Solar - the right choice to live 'greener' and protect
                          the future of our planet.
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
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default Environment;
