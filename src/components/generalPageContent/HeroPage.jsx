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
                          <p id="bannerTitleMobile">
                            You, us & solar panels <br />
                            equals a greener UK
                            <br />
                            <mark id="subTitleObtainQuotesMobile">
                              Obtain 3 quotes now
                              <Menu.Item
                                id="angleDownIconMobile"
                                icon={{ name: "angle down" }}
                                as={Link}
                                to={{ pathname: "/quotes" }}
                              />
                            </mark>
                          </p>
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
                              <p id="environmentalHeroTitleMobile">
                                We donate{" "}
                                <span className="numbers" ref={countUpRef} /> of
                                our profits
                                <br />
                                to other eco initiatives
                              </p>
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
                    <p id="bannerTitle">
                      You, us & solar panels <br />
                      equals a greener UK
                      <br />
                      <mark id="subTitleObtainQuotes">
                        Obtain 3 quotes now
                        <Menu.Item
                          id="angleDownIcon"
                          icon={{ name: "angle down" }}
                          as={Link}
                          to={{ pathname: "/quotes" }}
                        />
                      </mark>
                    </p>
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
                        <p>
                          We donate{" "}
                          <span className="numbers" ref={countUpRef} /> of our
                          profits
                          <br />
                          to other eco initiatives
                        </p>
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