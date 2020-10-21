import React from "react";
import {Button} from "semantic-ui-react"

function BannerLandingPage() {
  return (
    <div id="bannerDiv">
      <img
        id="bannerImg"
        src="/images/BannerImage.jpg"
        alt="Top banner"
      />
      <h1 id="bannerTxt">We will donate 167.450 kr to help save the planet</h1>
      <Button id="bannerButton">Read more</Button>
    </div>
  );
}

export default BannerLandingPage;
