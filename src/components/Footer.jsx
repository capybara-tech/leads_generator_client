import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = (props) => {
  if (props.location.pathname==="/adminhomepage") {
    return false;
}
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
        to={{ pathname: "/adminhomepage" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default withRouter (Footer);