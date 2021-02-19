import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieNotice = () => {
  return (
    <div id="cookieBanner">
      <CookieConsent
        location="bottom"
        buttonText="Understood"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#2B373B", backgroundColor: "#fffff4", marginRight: "7vw", borderRadius: "5px", fontWeight: "bold" }}
        expires={150}
      >
        This website uses cookies to enhance your experience. Learn more - {" "}
          <Link data-cy="button" to="/cookies">
            terms
          </Link>
      </CookieConsent>
    </div>
  );
};

export default CookieNotice;