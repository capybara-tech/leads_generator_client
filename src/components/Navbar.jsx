import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu text color="" id="navbar">
      <Menu.Item id="logo" alt="capybara-logo" as={Link} to={{ pathname: "/" }}>
        <img data-cy="logo" src="/images/dummylogo.png" />
      </Menu.Item>
      <Menu.Item
        position="right"
        as={Link}
        to={{ pathname: "/whysolar" }}
        content="Why solar"
        data-cy="button"
      />
      <Menu.Item
        position="right"
        as={Link}
        to={{ pathname: "/aboutus" }}
        content="About us"
        data-cy="button"
      />
      <Menu.Item
        position="right"
        as={Link}
        to={{ pathname: "/faqs" }}
        content="FAQs"
        data-cy="button"
      />
      <Menu.Item
        position="right"
        as={Link}
        to={{ pathname: "/quotes" }}
        content="Get up to three quotes"
        data-cy="button"
      >
        <Button id="navbarButton">Get up to three quotes</Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
