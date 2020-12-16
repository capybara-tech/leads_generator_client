import React from "react";
import "./Footer.style.css";
import { Link, withRouter } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";

const Footer = (props) => {
  if (props.location.pathname === "/adminhomepage") {
    return false;
  }
  return (
    <div data-cy="footer" className="footer">
      <Container>
        <Grid divided="vertically" textAlign="left">
          <Grid.Row columns={5}>
            <Grid.Column>
              <h3 className="footerHeader">Solar</h3>
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/howsolarworks" }}
              >
                How solar works?
              </Link>
            </Grid.Column>
            <Grid.Column>
              <h3 className="footerHeader">Discover</h3>
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/aboutus" }}
              >
                About us
              </Link>{" "}
              <br />
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/howitworks" }}
              >
                How SOLSPANA works
              </Link>{" "}
              <br />
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/environment" }}
              >
                Impact on planet
              </Link>{" "}
              |{" "}
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/economics" }}
              >
                Impact on wallet
              </Link>{" "}
              <br />
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/partner" }}
              >
                Become a partner
              </Link>{" "}
              <br />
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/quotes" }}
              >
                Get up to 3 quotes
              </Link>{" "}
            </Grid.Column>
            <Grid.Column>
              <h3 className="footerHeader">Legal</h3>
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/termsandconditions" }}
              >
                Terms and conditions
              </Link>{" "}
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/privacypolicy" }}
              >
                Privacy policy
              </Link>{" "}
              <br />
              <Link
                className="footerLink"
                data-cy="button"
                as={Link}
                to={{ pathname: "/cookies" }}
              >
                Cookies
              </Link>{" "}
            </Grid.Column>
            <Grid.Column>
              <h3 className="footerHeader">Help</h3>
            </Grid.Column>
            <Grid.Column>
              <h3 className="footerHeader">Follow us on</h3>
              <h3 className="footerHeader">Our charities</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <p>
        {" "}
        <br /> &copy;{new Date().getFullYear()} CAPYBARA TECH | registration no.
        123456-7890, Kista, Stockholm | All rights reserved
      </p>
      <Link
        id="adminLink"
        data-cy="button"
        as={Link}
        to={{ pathname: "/adminhomepage" }}
      >
        Admin
      </Link>
    </div>
  );
};

export default withRouter(Footer);