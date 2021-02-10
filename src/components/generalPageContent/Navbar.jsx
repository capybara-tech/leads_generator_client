import React, { useState } from "react";
import Media from "react-media";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.style.css";
import { Menu, Button, Image, Dropdown, Icon } from "semantic-ui-react";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

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
      <Media
        queries={{
          mobile: "(max-width: 599px)",
          desktop: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <>
                <div id="navbarMobile">
                  <nav role="navigation">
                    <Menu text id="logoMobile">
                      <Menu.Item
                        position={"right"}
                        as={Link}
                        to={{ pathname: "/" }}
                      >
                        <Image size={"small"} src="/images/final logo.png" />
                      </Menu.Item>
                    </Menu>
                    <div id="menuToggle">
                      <input type="checkbox" />

                      <span></span>
                      <span></span>
                      <span></span>

                      <ul id="menu">
                        <Menu text vertical>
                          <p>Why Solar</p>
                          <ol>
                            <Menu.Item
                              position="right"
                              as={Link}
                              to={{ pathname: "/environment" }}
                              content="- Environment"
                              data-cy="button"
                            />
                          </ol>
                          <ol>
                            <Menu.Item
                              position="right"
                              as={Link}
                              to={{ pathname: "/economics" }}
                              content="- Economy"
                              data-cy="button"
                            />
                          </ol>

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
                            id="navbarButtonMenuItemMobile"
                            position="right"
                            as={Link}
                            to={{ pathname: "/quotes" }}
                            content="Get up to 3 quotes"
                            data-cy="button"
                          />
                        </Menu>
                      </ul>
                    </div>
                  </nav>
                </div>
              </>
            )}
            {matches.desktop && (
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
                            Environment{" "}
                            <Icon
                              className="subnavAngleRight"
                              name="angle right"
                            />
                          </Dropdown.Item>
                          <Dropdown.Item
                            id="linkToEconomicsPage"
                            as={Link}
                            to={{ pathname: "/economics" }}
                          >
                            Economy{" "}
                            <Icon
                              className="subnavAngleRight"
                              name="angle right"
                            />
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
          </>
        )}
      </Media>
    </div>
  );
};

export default withRouter(Navbar);
