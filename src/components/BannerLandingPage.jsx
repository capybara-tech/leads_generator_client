import React from "react";
import {Button} from "semantic-ui-react"

function BannerLandingPage() {
  return (
    <div>
    <div id="banner">
      <img
        id="bannerImg"
        src="/images/BannerImage.jpg"
        alt="Top banner"
      />
      <div id="bannerContent">
      <p id="bannerTxt">We will donate <mark className="numbers">165.747 kr</mark> to help save the planet</p>
      <Button id="bannerButton">Read more</Button>
      </div>
    </div>
    </div>
  );
}

export default BannerLandingPage;
