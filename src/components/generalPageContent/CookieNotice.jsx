import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieNotice = () => {
  return (
    <div>
      <CookieConsent
      
        location="bottom"
        buttonText="Understood"
        expires={150}
      >
        This website uses cookies to enhance your experience. Learn more:{" "}
      </CookieConsent>
    </div>
  );
};

export default CookieNotice;