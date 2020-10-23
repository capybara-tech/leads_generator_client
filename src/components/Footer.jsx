import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <br />
      <p>
        {" "}
        &copy;{new Date().getFullYear()} CAPYBARA TECH AB | All rights reserved
        | Terms Of Service | Privacy
      </p>
      <Link
        id="adminLink"
        data-cy="button"
        as={Link}
        to={{ pathname: "/adminhome" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default Footer;
