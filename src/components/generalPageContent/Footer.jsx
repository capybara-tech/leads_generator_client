import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Grid } from "semantic-ui-react";

const Footer = (props) => {
  if (props.location.pathname === "/adminhomepage") {
    return false;
  }
  return (
    <div data-cy="footer" className="footer">
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={4}>
            <Grid.Column textAlign="center">
              <h3>Solar</h3>
              <Link data-cy="button" as={Link} to={{ pathname: "/howsolarworks" }}>
                How solar works?
              </Link>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h3>Discover</h3>
              <Link data-cy="button" as={Link} to={{ pathname: "/aboutus" }}>
                About us
              </Link>{" "}
              <br />
              <Link data-cy="button" as={Link} to={{ pathname: "/howitworks" }}>
                How SOLSPANA works
              </Link>{" "}
              <br />
              <Link
                data-cy="button"
                as={Link}
                to={{ pathname: "/environment" }}
              >
                Impact on planet
              </Link>{" "}
              |{" "}
              <Link data-cy="button" as={Link} to={{ pathname: "/economics" }}>
                Impact on wallet
              </Link>{" "}
              <br />
              <Link data-cy="button" as={Link} to={{ pathname: "/partner" }}>
                Become a partner
              </Link>{" "}
              <br />
              <Link data-cy="button" as={Link} to={{ pathname: "/quotes" }}>
                Get up to 3 quotes
              </Link>{" "}
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h3>Boring stuff</h3>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <h3>Help</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <p>
        {" "}
        &copy;{new Date().getFullYear()} CAPYBARA TECH AB | All rights reserved
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