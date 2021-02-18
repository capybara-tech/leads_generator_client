import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieNotice = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Understood"
        expires={150}
      >
        This website uses cookies to enhance your experience. Learn more:{" "}
        <div>
          <Link data-cy="content" to="/cookies">
            terms
          </Link>
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookieNotice;