import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
  if (props.location.pathname === "/adminhomepage") {
    return false;
  }
  return (
    <div data-cy="footer" className="footer">
      <h3>Discover</h3>
      <Link data-cy="button" as={Link} to={{ pathname: "/aboutus" }}>
        About us
      </Link>{" "}
      <br />
      <Link data-cy="button" as={Link} to={{ pathname: "/howitworks" }}>
        How SOLSPANA works
      </Link>{" "}
      <br />
      <Link data-cy="button" as={Link} to={{ pathname: "/environment" }}>
        Impact on planet
      </Link>{" "}
      |{" "}
      <Link data-cy="button" as={Link} to={{ pathname: "/economics" }}>
        Impact on wallet
      </Link>{" "}
      <br />
      <Link data-cy="button" as={Link} to={{ pathname: "/partner" }}>
        Become a partner
      </Link>{" "}
      <br />
      <Link data-cy="button" as={Link} to={{ pathname: "/quotes" }}>
        Get up to 3 quotes
      </Link>{" "}
      <br />
      <p>
        {" "}
        &copy;{new Date().getFullYear()} CAPYBARA TECH AB | All rights reserved
      </p>
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