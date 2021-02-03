import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import {
  Button,
  Icon,
  Image,
  Grid,
  Segment,
  Header,
  Card,
} from "semantic-ui-react";
import { motion } from "framer-motion";
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
      <Grid id="environmentSection" centered={true}>
        <Grid.Row columns={2} id="topCardsEnvironment">
          <Grid.Column id="ourPrimaryMisson">
            {" "}
            <p id="ourPrimaryMissonText">
              Our primary mission is to help future proof our the planet and
              combat climate destruction.
            </p>
          </Grid.Column>
          <Grid.Column >
            <p id="promotingEnvironmentalBenefitsText">
              Through promoting the generally unknown environmental benefits of
              solar, and some lobbying thrown in, our aim is to help people live
              more informed and creative lives. Tech available to be harnessed
              like the popular electric car.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} id="bottomCardEnvironment">
          <Grid.Column id="ourDedication" textAlign="center">
            <p id="ourDedicationText">
              Being 100% dedicated to our cause we have teamed up with two
              conservational charities and donate a percentage of our profits
              directly to them. Better together.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* 
      <Button
        id="bannerButton"
        data-cy="button"
        as={Link}
        to={{ pathname: "/aboutus" }}
      >
        Read more
      </Button>
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
            offset={0}
            duration={1500}
          >
            <Icon id="dubbleArrowDown" size="big" name="angle double down" />
          </Scrolllink>
        </motion.span>
      </div> */}
    </>
  );
};

export default EnvironmentSectionLandingPage;
