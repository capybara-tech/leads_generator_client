import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Menu, Icon, Grid } from "semantic-ui-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Media from "react-media";
import "./HeroPage.style.css";

const HeroPage = () => {
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
                <div id="heroPageMobile">
                  <Grid>
                    <Grid.Row id="topBannerContentMobile">
                      <Grid.Column>
                        {" "}
                        <h1 id="bannerTitleMobile">
                          You, us & solar panels <br />
                          equals a greener UK
                          <br />
                          <Menu.Item as={Link} to={{ pathname: "/quotes" }}>
                            <mark id="subTitleObtainQuotesMobile">
                              Obtain 3 quotes now{" "}
                              <Icon
                                id="angleDownIconMobile"
                                name="angle down"
                              />
                            </mark>{" "}
                          </Menu.Item>
                        </h1>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="bottomBannerContentMobile">
                      <Grid.Column>
                        <CountUp
                          start={0}
                          end={15}
                          delay={0}
                          duration={4}
                          suffix={"%"}
                        >
                          {({ countUpRef }) => (
                            <h2 id="environmentalHeroTitleMobile">
                              We donate{" "}
                              <span className="numbers" ref={countUpRef} /> of
                              our profits
                              <br />
                              to other eco initiatives
                            </h2>
                          )}
                        </CountUp>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              )}
              {matches.desktop && (
                <div id="heroPage">
                  <div id="bannerContent">
                    <h1 id="bannerTitle">
                      You, us & solar panels <br />
                      equals a greener UK
                      <br />
                      <Menu.Item as={Link} to={{ pathname: "/quotes" }}>
                        <mark id="subTitleObtainQuotes">
                          Obtain 3 quotes now{" "}
                          <Icon id="angleDownIcon" name="angle down" />
                        </mark>
                      </Menu.Item>
                    </h1>
                  </div>
                  <div id="environmentalHeroTitle">
                    <CountUp
                      start={0}
                      end={15}
                      delay={0}
                      duration={4}
                      suffix={"%"}
                    >
                      {({ countUpRef }) => (
                        <h2>
                          We donate{" "}
                          <span className="numbers" ref={countUpRef} /> of our
                          profits
                          <br />
                          to other eco initiatives
                        </h2>
                      )}
                    </CountUp>
                  </div>
                  <div id="dubbleArrowDown">
                    <motion.span
                      transition={bounceTransition}
                      animate={{
                        y: ["50%", "-50%"],
                      }}
                    >
                      <Scrolllink
                        id="dubbleArrowDown"
                        to="environmentSection"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
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
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default HeroPage;
