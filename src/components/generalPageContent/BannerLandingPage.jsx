import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";

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
          <img id="bannerImg" src="/images/BannerImage.jpg" alt="Top banner" />
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
            <p id="bannerTxt">
              We will donate <mark className="numbers">165.747 kr</mark>
              <br /> to help save the planet
              <br /> <br />
              <Button
                id="bannerButton"
                data-cy="button"
                as={Link}
                to={{ pathname: "/aboutus" }}
              >
                Read more
              </Button>
            </p>
          </div>
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