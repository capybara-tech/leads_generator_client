import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import { Menu, Segment, Image, Button } from "semantic-ui-react";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div>
      {(isDesktopOrLaptop || isTabletOrMobileDevice || isTabletOrMobile) && (
        <>
          <div>
            <Menu text color="" id="navbar">
              <Menu.Item
                id="logo"
                alt="capybara-logo"
                as={Link}
                to={{ pathname: "/" }}
              >
                <img data-cy="logo" src="/images/dummylogo.png" alt="Logo" />
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
                id="navbarButtonMenuItem"
                position="right"
                as={Link}
                to={{ pathname: "/quotes" }}
                content="Get up to three quotes"
                data-cy="button"
              >
                <Button id="navbarButton">Get up to 3 quotes</Button>
              </Menu.Item>
            </Menu>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Navbar);