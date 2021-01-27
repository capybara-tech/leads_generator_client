import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'
import "./HeroPage.style.css";

const HeroPage = () => {
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
    </div>
  );
};

export default HeroPage;
