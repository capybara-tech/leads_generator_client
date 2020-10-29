import React from "react";
import { Button, Icon } from "semantic-ui-react";

const BannerLandingPage = () => {
  return (
    <div>
      <div id="banner">
        <img id="bannerImg" src="/images/BannerImage.jpg" alt="Top banner" />
        <div id="bannerContent">
          <p id="bannerInfoTxt">Tillsammans gör vi Sverige<br/>grönare med solceller <br/>
          <mark id="subInfoTxt">Jämför upp till tre olika offerter<Icon id="angleDownIcon" name="angle down"/></mark>
          </p>
          <p id="bannerTxt">
            We will donate <mark className="numbers">165.747 kr</mark>
            <br /> to help save the planet<br/> <br/><Button id="bannerButton">Read more</Button>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default BannerLandingPage;
