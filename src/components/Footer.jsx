import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>©2020</p>
      <Link
        data-cy="button"
        as={Link}
        to={{ pathname: "/adminlogin" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default Footer;