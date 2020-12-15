import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
  if (props.location.pathname === "/adminhomepage") {
    return false;
  }
  return (
    <div data-cy="footer" className="footer">
      <br />
      <p>
        {" "}
        &copy;{new Date().getFullYear()} CAPYBARA TECH AB | All rights reserved
        | Terms Of Service | Privacy
      </p>
      <Link data-cy="button" as={Link} to={{ pathname: "/aboutus" }}>
        About us
      </Link>
      <Link data-cy="button" as={Link} to={{ pathname: "/howitworks" }}>
        How it works
      </Link>
      <Link data-cy="button" as={Link} to={{ pathname: "/environment" }}>
        Impact on planet
      </Link>
      <Link data-cy="button" as={Link} to={{ pathname: "/economics" }}>
        Impact on wallet
      </Link>
      <Link data-cy="button" as={Link} to={{ pathname: "/partner" }}>
        Become a partner
      </Link>
      <Link data-cy="button" as={Link} to={{ pathname: "/quotes" }}>
        Get up to 3 quotes
      </Link>
      <Link
        id="adminLink"
        data-cy="button"
        as={Link}
        to={{ pathname: "/adminhomepage" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default withRouter(Footer);