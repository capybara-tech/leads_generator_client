import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.style.css";
import { Menu, Button, Image, Dropdown, Icon } from "semantic-ui-react";

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
            <Menu text size="massive" color="">
              <Menu.Item
                position="left"
                id="logo"
                alt="capybara-logo"
                as={Link}
                to={{ pathname: "/" }}
              >
                <Image
                  data-cy="logo"
                  src="/images/final logo.png"
                  alt="Logo"
                />
              </Menu.Item>
              <Menu.Item position="right">
                <Dropdown item text="Why solar" data-cy="button">
                  <Dropdown.Menu id="dropDownMenu">
                    <Dropdown.Item
                      id="linkToEnvironmentPage"
                      as={Link}
                      to={{ pathname: "/environment" }}
                    >
                    Environment <Icon className="subnavAngleRight" name="angle right"/>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="linkToEconomicsPage"
                      as={Link}
                      to={{ pathname: "/economics" }}
                    >
                     Economy <Icon className="subnavAngleRight" name="angle right" />
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