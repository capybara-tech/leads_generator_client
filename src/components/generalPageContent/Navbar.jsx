import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Modal, Grid, Divider, Image } from "semantic-ui-react";

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
                        src="https://www.alicetraveldesigner.com/wp-content/uploads/2020/01/IMG_7895-1300x1300.jpg"
                      />
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
                        src="https://previews.123rf.com/images/tankist276/tankist2761203/tankist276120300263/13002202-background-of-very-many-mass-currency-note-dollars-square-photo.jpg"
                      />
                    </Menu.Item>
                  </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>
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
