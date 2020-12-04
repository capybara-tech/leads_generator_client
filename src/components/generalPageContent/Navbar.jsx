import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Modal, Card } from "semantic-ui-react";

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
                <Card.Group itemsPerColumn={1}>
                  <Card
                    image="https://thevideoink.com/wp-content/uploads/2017/05/environment-policy.EVt5-g.jpg"
                  />
                
                  <Card
                    image="https://img.caixin.com/2019-12-10/1575981676022946.jpg"
                  />
                </Card.Group>
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
