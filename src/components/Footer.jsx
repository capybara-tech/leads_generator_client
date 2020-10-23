import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link data-cy="button" as={Link} to={{ pathname: "/adminhome" }}>
        Admin
      </Link>
      <p>
        {" "}
        &copy;{new Date().getFullYear()} CAPYBARA TECH AB | All rights reserved
        | Terms Of Service | Privacy
      </p>
    </div>
  );
};

export default Footer;
