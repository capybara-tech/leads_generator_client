import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Button, Icon, Image, Grid } from "semantic-ui-react";
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
    <Grid id="environmentSection">
      <Grid.Row columns={2} id="environmentalContentLandingPage">
        <Grid.Column>
        <p>
          We love our planet so much as such we donate a massive 15% of our net
          profits to other green initiatives
        </p>
        <Button
          id="bannerButton"
          data-cy="button"
          as={Link}
          to={{ pathname: "/aboutus" }}
        >
          Read more
        </Button>
        </Grid.Column>
        <Grid.Column>
        <Image size="medium" id="heroTree" src="/images/HeroTree1.png" alt="tree" />
      </Grid.Column>
      </Grid.Row>
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
      </div>
    </Grid>
  );
};

export default EnvironmentSectionLandingPage;
