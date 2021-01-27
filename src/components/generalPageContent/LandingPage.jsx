import React, { useEffect } from "react";
import HeroPage from "./HeroPage";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroPage />
      
    </div>
  );
};

export default LandingPage;