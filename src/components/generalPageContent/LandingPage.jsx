import React from "react";
import BannerLandingPage from "./BannerLandingPage";
import LandingPageInfoSegment from "./LandingPageInfoSegment";
import AddressSearch from "../mandatoryQuestions/AddressSearch"

const LandingPage = () => {
  return (
    <div>
      <BannerLandingPage /> 
      <LandingPageInfoSegment />
      <AddressSearch />
    </div>
  );
};

export default LandingPage;