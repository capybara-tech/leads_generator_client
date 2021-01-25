import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.style.css";
import {
  Menu,
  Button,
  Modal,
  Grid,
  Divider,
  Image,
  Icon,
  Header,
} from "semantic-ui-react";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
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

  return (
    <div>
      {(isDesktopOrLaptop || isTabletOrMobileDevice || isTabletOrMobile) && (
        <>
          <div id="navbar">
            <Menu text inverted color="">
              <Menu.Item
                id="logo"
                alt="capybara-logo"
                as={Link}
                to={{ pathname: "/" }}
              >
                <img data-cy="logo" src="/images/dummylogo.png" alt="Logo" />
              </Menu.Item>
              <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size="small"
                trigger={
                  <Menu.Item
                    icon={{ name: "angle down" }}
                    position="right"
                    content="Why solar"
                    data-cy="button"
                  />
                }
              >
                <Grid columns={2} relaxed="very">
                  <Grid.Column>
                    <Menu.Item
                      onClick={() => setOpen(false)}
                      id="linkToEnvironmentPage"
                      as={Link}
                      to={{ pathname: "/environment" }}
                    >
                      <Image
                        circular
                        size="massive"
                        src="https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/1740/preview_1740.jpg"
                      />
                      <Header id="headerSubNav" as="h3" textAlign="center">
                        How can this help our{" "}
                        <span id="environmentWord">environment</span>?
                      </Header>
                    </Menu.Item>
                  </Grid.Column>
                  <Grid.Column>
                    <Menu.Item
                      onClick={() => setOpen(false)}
                      id="linkToEconomicsPage"
                      as={Link}
                      to={{ pathname: "/economics" }}
                    >
                      <Image
                        circular
                        size="massive"
                        src="https://i.pinimg.com/originals/b1/96/ff/b196ff9387ada79fc28b7953e81372fb.png"
                      />
                      <Header id="headerSubNav" as="h3" textAlign="center">
                        How can this help your <br />
                        <span id="economyWord">economy</span>?
                      </Header>
                    </Menu.Item>
                  </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>{" "}
                <div>
                  <Icon
                    circular
                    id="closeIcon"
                    name="close"
                    size="big"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </Modal>
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
