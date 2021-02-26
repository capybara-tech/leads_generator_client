import React from "react";
import "./Footer.style.css";
import { Link, withRouter } from "react-router-dom";
import Media from "react-media";
import { Container, Grid, Icon } from "semantic-ui-react";

const Footer = (props) => {
  if (props.location.pathname === "/adminhomepage") {
    return false;
  }
  return (
    <>
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
                <div data-cy="footer" className="footer">
                  <Container>
                    <Grid divided="vertically" textAlign="left">
                      <Grid.Row columns={3}>
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
                          <h3 className="footerHeader">Benefits</h3>
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/environment" }}
                          >
                            Environmental
                          </Link>
                          <br />
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/economics" }}
                          >
                            Financial
                          </Link>{" "}
                        </Grid.Column>
                        <Grid.Column>
                          {" "}
                          <h3 className="footerHeader">Our charities</h3>
                          <p id="protectTheForest" className="footerLink">
                            Protect the forest
                          </p>
                          <p id="greenLiving" className="footerLink">
                            Green living
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row columns={3}>
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
                            How WattsWhat works
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
                            Get up to 3 quotes{" "}
                            <Icon id="trophy" name="trophy" />
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
                          </Link>
                          <br />{" "}
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
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/contactus" }}
                          >
                            Contact us
                          </Link>{" "}
                          <br />
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/faqs" }}
                          >
                            FAQs
                          </Link>{" "}
                          <br /> <br />
                          <p className="contact">capybara.it@gmail.com</p>
                          <p className="contact">
                            Monday - Friday | 8.00 - 16.00
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row centered={"true"}>
                        <Grid.Column>
                          <h3 className="footerHeader">Follow us on</h3>
                          <div id="socialMedia">
                            <i
                              id="instagramIcon"
                              onClick={() =>
                                window.open("https://www.instagram.com/wattswhatsolar/")
                              }
                              className="fa fa-instagram fa"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="facebookIcon"
                              onClick={() =>
                                window.open("https://www.facebook.com/WattsWhat-544380999829418")
                              }
                              className="fa fa-facebook"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="twitterIcon"
                              onClick={() => window.open("https://twitter.com")}
                              className="fab fa-twitter-square fa"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="linkedinIcon"
                              onClick={() =>
                                window.open("https://linkedin.com")
                              }
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </div>
              )}
              {matches.desktop && (
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
                          <h3 className="footerHeader">Benefits</h3>
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/environment" }}
                          >
                            Environmental
                          </Link>{" "}
                          <br />
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/economics" }}
                          >
                            Financial
                          </Link>{" "}
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
                            How WattsWhat works
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
                            Get up to 3 quotes{" "}
                            <Icon id="trophy" name="trophy" />
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
                          </Link>
                          <br />{" "}
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
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/contactus" }}
                          >
                            Contact us
                          </Link>{" "}
                          <br />
                          <Link
                            className="footerLink"
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/faqs" }}
                          >
                            FAQs
                          </Link>{" "}
                          <br /> <br />
                          <p className="contact">capybara.it@gmail.com</p>
                          <p className="contact">
                            Monday - Friday | 8.00 - 16.00
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 className="footerHeader">Follow us on</h3>
                          <div id="socialMedia">
                            <i
                              id="instagramIcon"
                              onClick={() =>
                                window.open("https://www.instagram.com/wattswhatsolar/")
                              }
                              className="fa fa-instagram fa"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="facebookIcon"
                              onClick={() =>
                                window.open("https://www.facebook.com/WattsWhat-544380999829418")
                              }
                              className="fa fa-facebook"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="twitterIcon"
                              onClick={() => window.open("https://twitter.com")}
                              className="fab fa-twitter-square fa"
                              aria-hidden="true"
                            />{" "}
                            <i
                              id="linkedinIcon"
                              onClick={() =>
                                window.open("https://linkedin.com")
                              }
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </div>
                          <h3 className="footerHeader">Our charities</h3>
                          <p id="protectTheForest" className="footerLink">
                            Protect the forest
                          </p>
                          <p id="greenLiving" className="footerLink">
                            Green living
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                  <p>
                    {" "}
                    <br /> &copy;{new Date().getFullYear()} CAPYBARA TECH |
                    registration no. 123456-7890, Kista, Stockholm | All rights
                    reserved
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
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default withRouter(Footer);
