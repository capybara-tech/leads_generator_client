import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.style.css";
import { Menu, Button, Image, Dropdown } from "semantic-ui-react";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  if (props.location.pathname === "/adminhomepage") {
    return false;
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      {(isDesktopOrLaptop || isTabletOrMobileDevice || isTabletOrMobile) && (
        <>
          <div className={navbar ? "navbar active" : "navbar"}>
            <Menu text inverted size="massive" color="">
              <Menu.Item
                id="logo"
                alt="capybara-logo"
                as={Link}
                to={{ pathname: "/" }}
              >
                <Image
                  size="small"
                  data-cy="logo"
                  src="/images/final logo.png"
                  alt="Logo"
                />
              </Menu.Item>
              <Menu.Item>
                <Dropdown item text="Why solar">
                  <Dropdown.Menu id="dropDownMenu">
                    <Dropdown.Item
                      id="linkToEnvironmentPage"
                      as={Link}
                      to={{ pathname: "/environment" }}
                    >
                      How can this help our 
                        <span id="environmentWord"> environment</span>?
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="linkToEconomicsPage"
                      as={Link}
                      to={{ pathname: "/economics" }}
                    >
                      How can this help your
                        <span id="economyWord"> economy</span>?
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
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
