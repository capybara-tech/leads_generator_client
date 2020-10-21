import React from "react";
import { Link } from "react-router-dom";
import { Image, Button, Menu } from "semantic-ui-react";

const Navbar = () => {

  return (
    <Menu text color="" id="navbar">
      <Image
        data-cy="logo"
        src="/images/dummylogo.png"
        alt="capybara-logo"
        as={Link}
        to={{ pathname: "/" }}
        circular
        size="tiny"
      />
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
