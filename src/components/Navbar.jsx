import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Image, Button } from "semantic-ui-react";

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
        >
          <Button id="navbarButton">Get up to three quotes</Button>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Navbar;
