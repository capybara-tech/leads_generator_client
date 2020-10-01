import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <img data-cy="logo" src="/images/dummylogo.png" alt="capybara-logo" />
      <Link to='/whysolar' data-cy="button">Why solar</Link>
      <Link data-cy="button">About us</Link>
      <Link data-cy="button">FAQs</Link>
      <Link data-cy="button">Get up to three quotes</Link>
    </div>
  );
};

export default Navbar;
