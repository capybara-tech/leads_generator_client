import React, { useEffect } from "react";
import BannerLandingPage from "./BannerLandingPage";
import LandingPageInfoSegment from "./LandingPageInfoSegment";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BannerLandingPage />
      <LandingPageInfoSegment />
    </div>
  );
};

export default LandingPage;