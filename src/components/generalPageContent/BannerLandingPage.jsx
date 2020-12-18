import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { Button, Icon, Menu } from "semantic-ui-react";
import CountUp from "react-countup";
import "./BannerLandingPage.style.css";

const BannerLandingPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <div id="banner">
          <div id="bannerContent">
            <p id="bannerInfoTxt">
              Tillsammans gör vi Sverige
              <br />
              grönare med solceller <br />
              <mark id="subInfoTxt">
                Jämför upp till tre olika offerter
                <Menu.Item
                  id="angleDownIcon"
                  icon={{ name: "angle down" }}
                  as={Link}
                  to={{ pathname: "/quotes" }}
                />
              </mark>
            </p>
            <div>
              <CountUp start={0} end={165677} delay={0} duration={4} suffix={ "Kr" }>
                {({ countUpRef }) => (
                  <p id="bannerTxt">
                    We will donate <span className="numbers" ref={countUpRef} />
                    <br />
                    to help save the planet
                  </p>
                )}
              </CountUp>
              <Button
                id="bannerButton"
                data-cy="button"
                as={Link}
                to={{ pathname: "/aboutus" }}
              >
                Read more
              </Button>
            </div>
          </div>
          <Scrolllink
            id="dubbleArrowDown"
            to="infoSegment"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <Icon size="huge" name="angle double down" />
          </Scrolllink>
        </div>
      )}
      {isTabletOrMobileDevice && (
        <div id="bannerMob">
          <img
            id="bannerImgMob"
            src="/images/BannerImageMob.jpg"
            alt="Top banner"
          />
          <div id="bannerContentMob">
            <p id="bannerInfoTxtMob">
              Tillsammans gör vi Sverige
              <br />
              grönare med solceller <br />
              <mark id="subInfoTxtMob">
                Jämför upp till tre olika offerter
                <Icon id="angleDownIcon" name="angle down" />
              </mark>
            </p>
            <p id="bannerTxtMob">
              We will donate <mark className="numbersMob">165.747 kr</mark>
              <br /> to help save the planet
              <br /> <br />
              <Button id="bannerButtonMob">Read more</Button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerLandingPage;
