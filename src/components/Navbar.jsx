import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <img data-cy="logo" src="/images/dummylogo.png" alt="capybara-logo" />
      <Link data-cy="button" to="/whysolar" >Why solar</Link>
      <Link data-cy="button" to="/aboutus" >About us</Link>
      <Link data-cy="button" to="/faqs" >FAQs</Link>
      <Link data-cy="button" to="/quotes" >Get up to three quotes</Link>
    </div>
  );
};

export default Navbar;