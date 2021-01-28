import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Button, Icon } from "semantic-ui-react";
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
    <div id="environmentSection">
      <div id="environmentalContentLandingPage">
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
      </div>
      <div>
        <img id="heroTree" src="/images/HeroTree1.png" alt="tree" />
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
            to=""
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
    </div>
  );
};

export default EnvironmentSectionLandingPage;
