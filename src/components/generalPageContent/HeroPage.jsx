import React from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Menu, Icon } from "semantic-ui-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
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
    <div id="heroPage">
      <div id="bannerContent">
        <p id="bannerTitle">
          Let's transform the UK into a<br /> green haven with solar panels{" "}
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
        <CountUp start={0} end={15} delay={0} duration={4} suffix={"%"}>
          {({ countUpRef }) => (
            <p>
              We donate <span className="numbers" ref={countUpRef} /> of our
              profits
              <br />
              to other green initiaves
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

export default HeroPage;
