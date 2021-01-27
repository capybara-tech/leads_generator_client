import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import './EnvironmentalSectionLandingPage.style.css'


const EnvironmentSectionLandingPage = () => {
  return (
    <div id="environmentSection">
      <div id="environmentalContentLandingPage">
        <p>We love our planet so much as such we donate a massive 15% of our net profits to other green initiatives</p>
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
  );
};

export default EnvironmentSectionLandingPage;
