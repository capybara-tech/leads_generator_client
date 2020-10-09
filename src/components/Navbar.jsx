import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Image } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Segment id="segment">
      <Menu id="navbar" text>
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
          name="Why Solar"
          data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/aboutus" }}
          name="About us"
          data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/faqs" }}
          name="FAQs"
          data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/quotes" }}
          name="Get up to three quotes"
          data-cy="button"
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;