import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Grid, Button, Icon, Image } from "semantic-ui-react";
import { motion } from "framer-motion";
import Media from "react-media";
import "./EnvironmentalSectionLandingPage.style.css";

const EnvironmentSectionLandingPage = () => {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

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
                <>
                  <Grid>
                    <Grid.Row id="topCardsEnvironmentMobile">
                      <Grid.Column id="ourPrimaryMissionRowMobile">
                        {" "}
                        <p id="ourPrimaryMissonTextMobile">
                          Our primary mission is to help future proof our planet
                          and combat climate destruction.
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="promotionEnvironmentalBenefitsCardMobile">
                      <Grid.Column>
                        <p id="promotionEnvironmentalBenefitsTitleMobile">
                          Voice the benefits
                        </p>
                        <p id="promotingEnvironmentalBenefitsTextMobile">
                          Through promoting the generally unknown environmental
                          benefits of solar, and some lobbying thrown in, our
                          aim is to help people live more informed and creative
                          lives. <br /> <br />
                          Think of solar panels as the undiscovered electic car.
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="ourDedicationMobile">
                      <Grid.Column>
                        {" "}
                        <p id="ourDedicationTitleMobile">Our charities</p>
                        <p id="ourDedicationTextMobile">
                          The team here at WattsWhat are 100% dedicated to our
                          cause. We donate a percentage of our profits to two
                          conservational charities who we have teamed up with.
                          <br />
                          <br />
                          <Button
                            id="bannerButtonMobile"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/aboutus" }}
                          >
                            Read more
                          </Button>
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="ourCharitiesImageMobile">
                      <Grid.Column>
                      <Image size="medium" centered src="/images/charity.png"/></Grid.Column>
                    </Grid.Row>
                  </Grid>
                </>
              )}
              {matches.desktop && (
                <>
                  <Grid id="environmentSection" centered={true}>
                    <Grid.Row columns={2} id="topCardsEnvironment">
                      <Grid.Column id="ourPrimaryMisson">
                        {" "}
                        <p id="ourPrimaryMissonText">
                          Our primary mission is to help future proof our the
                          planet and combat climate destruction.
                        </p>
                      </Grid.Column>
                      <Grid.Column>
                        <p id="promotionEnvironmentalBenefitsTitle">
                          Voice the benefits
                        </p>
                        <p id="promotingEnvironmentalBenefitsText">
                          Through promoting the generally unknown environmental
                          benefits of solar, and some lobbying thrown in, our
                          aim is to help people live more informed and creative
                          lives. <br /> <br />
                          Think of solar panels as the undiscovered electic car.
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} id="bottomCardEnvironment">
                      <Grid.Column id="ourDedication" textAlign="center">
                        <p id="ourDedicationTitle">Our charities</p>
                        <p id="ourDedicationText">
                          The team here at WattsWhat are 100% dedicated to our
                          cause. We donate a percentage of our profits to two
                          conservational charities who we have teamed up with.
                          <br />
                          <br />
                          <Button
                            id="bannerButton"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/aboutus" }}
                          >
                            Read more
                          </Button>
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>

                  <div id="dubbleArrowDown">
                    <motion.span
                      transition={bounceTransition}
                      animate={{
                        y: ["50%", "-50%"],
                      }}
                    >
                      <Scrolllink
                        id="dubbleArrowDown"
                        to="summaryLandingPage"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-160}
                        duration={1500}
                      >
                        <Icon
                          id="dubbleArrowDown"
                          size="big"
                          name="angle double down"
                        />
                      </Scrolllink>
                    </motion.span>
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default EnvironmentSectionLandingPage;