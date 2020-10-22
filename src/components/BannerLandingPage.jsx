import React from "react";
import {Button} from "semantic-ui-react"

function BannerLandingPage() {
  return (
    <div id="banner">
      <img
        id="bannerImg"
        src="/images/BannerImage.jpg"
        alt="Top banner"
      />
      <div id="bannerContent">
      <p id="bannerTxt">We will donate 167.450 kr to help save the planet</p>
      <Button id="bannerButton">Read more</Button>
      </div>
    </div>
  );
}

export default BannerLandingPage;
