import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
  if (props.location.pathname==="/adminhomepage") {
    return false;
}
  return (
    <div>
      <p>©2020</p>
      <Link
        data-cy="button"
        as={Link}
        to={{ pathname: "/adminhomepage" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default withRouter (Footer);