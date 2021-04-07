import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.style.css";
import Media from "react-media";
import {
  Segment,
  Reveal,
  Image,
  Grid,
  Icon,
  Popup,
  Button,
} from "semantic-ui-react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <>
                  <div id="aboutUsContentMobile">
                    <div id="aboutUsBannerMobile">
                      <p data-cy="title" id="aboutUsTitleMobile">
                        Making UK greener, <br /> one quote at the time
                      </p>
                      <p>
                        Its simple, we promote the benefits of solar(hopefully
                        winning you over!), you complete our online quote
                        request and receive three quotes. Your solar quest then
                        begins.
                      </p>
                    </div>
                    <Segment raised id="aboutUsSegmentInfoMobile">
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column
                            textAlign={"center"}
                            id="ourCharitysMobile"
                          >
                            <Reveal animated="fade">
                              <Reveal.Content visible>
                                <div id="ourCharitysVisibleMobile">
                                  <p className="infoSegmentTitleMobile">
                                    - Our charities - <br />{" "}
                                    <p className="infoSegmentSubTitleMobile">
                                      click to reveal.
                                    </p>
                                  </p>
                                </div>
                              </Reveal.Content>
                              <Reveal.Content hidden>
                                <div id="ourCharitysHiddenMobile">
                                  <p className="infoSegmentParagraphMobile">
                                    We love our planet so much as such we donate
                                    a massive 15% of our net profits to other
                                    green initiatives.
                                    <br />
                                    <br />
                                    By completing our straightforward online
                                    quote request form you are indirectly
                                    donating to charity.
                                  </p>
                                </div>
                              </Reveal.Content>
                            </Reveal>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                          <Grid.Column
                            textAlign={"center"}
                            id="ourVisionMobile"
                          >
                            <Reveal animated="fade">
                              <Reveal.Content visible>
                                <div id="ourVisionVisibleMobile">
                                  <p className="infoSegmentTitleMobile">
                                    - Our mission - <br />
                                    <p className="infoSegmentSubTitleMobile">
                                      click to reveal.
                                    </p>
                                  </p>
                                </div>
                              </Reveal.Content>
                              <Reveal.Content hidden>
                                <div id="ourVisionHiddenMobile">
                                  {" "}
                                  <p className="infoSegmentParagraphMobile">
                                    Petrol and diesel car sales are banned from
                                    2030, solar power gets no real airtime. We
                                    are here to change that where people live
                                    more informed and more creative lives.
                                  </p>
                                </div>
                              </Reveal.Content>
                            </Reveal>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <div id="aboutUsBottomBanner">
                      <p id="meetTheTeamTitleMobile">- Meet the team -</p>
                      <Grid id="meetTheTeam">
                        <Grid.Row columns={3}>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="A stickler for searching for meaning and purpose, even in small things!"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/alexPhoto.png"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">Alex Bellamy</p>
                            <p className="teamMemberTitles">
                              CEO and co-founder
                            </p>
                            <a href="mailto:alex@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                              <p>alex@wattswhat.co.uk</p>
                            </a>
                            <i
                              onClick={() =>
                                window.open("https://www.linkedin.com/in/alex-bellamy-0237441b4/")
                              }
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="Bla Bla Bla Bla Bla Bla Bla Bla Bla"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/FelixProfil.jpg"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">
                              Felix Oppong Willborg
                            </p>
                            <p className="teamMemberTitles">
                              COO and co-founder
                            </p>
                            <a href="mailto:felix@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                              <p>felix@wattswhat.co.uk</p>
                            </a>
                            <i
                              onClick={() =>
                                window.open("https://www.linkedin.com/in/felix-oppong-willborg-827b93b5/")
                              }
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="Woff!"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/TwinkyPhoto.jpg"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">Twinky</p>
                            <p className="teamMemberTitles">
                              Head of Customer Satisfaction
                            </p>
                            <a href="mailto:hello@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                               <p>hello@wattswhat.co.uk</p>
                            </a>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      <p id="ceoMessageTitleMobile">
                        - A message from our CEO -
                      </p>
                      <p id="ceoMessage">
                        With our planet coming under increasing pressure from
                        global threats such as global warming, plastic clogging
                        up our oceans and deforestation, like most others it
                        concerns me what the world will be like for my
                        grandchildren and their offspring. Challenge the status
                        quo by investing in 100% clean and limitless solar
                        energy - and help change the world for tomorrow.
                      </p>
                      <p>Alex Bellamy, CEO Capybara UK</p>
                    </div>

                    <Segment raised id="ourAimsSegmentMobile">
                      <p id="ourAmbitionTitle">- Our ambition -</p>

                      <Grid id="ourAimsGridMobile">
                        <Grid.Row centered={true} columns={1}>
                          <Grid.Column textAlign={"center"}>
                            <Image
                              size="small"
                              alt="winner"
                              id="winnerMobile"
                              src="images/aboutUsPage/trophy.png"
                            />
                            <p>
                              Create a new eco initiative, where yes everyone is
                              a winner and a % of our profits are donated back
                              to society
                            </p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Image
                              size="small"
                              alt="like"
                              id="like"
                              src="images/aboutUsPage/heart.png"
                            />
                            <p>
                              By obtaining a quote you are donating indirectly
                              to charity, no strings attached!
                            </p>
                          </Grid.Column>
                          <Grid.Column>
                            <Image
                              size="small"
                              alt="money"
                              id="money"
                              src="images/aboutUsPage/money.png"
                            />
                            <p>
                              You will lower your energy bills and benefit from
                              a long-term steady investment, with returns better
                              than any bank
                            </p>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                          <Grid.Column>
                            <Image
                              size="small"
                              alt="handshake"
                              id="handshake"
                              src="images/aboutUsPage/thumbsUp.png"
                            />
                            <p>
                              Make solar energy easily accessible to all,
                              matching varying needs to our carefully selected
                              partners
                            </p>
                          </Grid.Column>
                          <Grid.Column>
                            <Image
                              size="small"
                              alt="recycle"
                              id="recycle"
                              src="images/aboutUsPage/recycle.png"
                            />
                            <p>
                              Revolutionise the solar market, voice the benefits
                              of solar helping people live in a greener society
                            </p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <div id="ourAimsConclusionMobile">
                      <Grid>
                        <Grid.Row columns={1}>
                          <Grid.Column>
                            <p id="conclusionOfOurAimsMobile">
                              Transparency, honesty and dedication to our
                              customers are a given
                            </p>
                            <Button
                              data-cy="button"
                              as={Link}
                              to={{ pathname: "/quotes" }}
                              id="quoteButtonMobile"
                            >
                              Feeling inspired? <br />
                              Click to obtain quotes
                            </Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </div>
                </>
              )}
              {matches.desktop && (
                <>
                  {" "}
                  <div id="aboutUsContent">
                    <div id="aboutUsBanner">
                      <p data-cy="title" id="aboutUsTitle">
                        Making UK greener, <br /> one quote at the time
                      </p>
                      <p>
                        Its simple, we promote the benefits of solar(hopefully
                        winning you over!), you complete our online quote
                        request and receive three quotes. Your solar quest then
                        begins.
                      </p>
                    </div>
                    <Segment raised id="aboutUsSegmentInfo">
                      <Grid>
                        <Grid.Row columns={2}>
                          <Grid.Column id="ourCharitys">
                            <Reveal animated="fade">
                              <Reveal.Content visible>
                                <div id="ourCharitysVisible">
                                  <p className="infoSegmentTitle">
                                    - Our charities -
                                  </p>
                                </div>
                              </Reveal.Content>
                              <Reveal.Content hidden>
                                <div id="ourCharitysHidden">
                                  <p className="infoSegmentParagraph">
                                    We love our planet so much as such we donate
                                    a massive 15% of our net profits to other
                                    green initiatives.
                                    <br />
                                    <br />
                                    By completing our straightforward online
                                    quote request form you are indirectly
                                    donating to charity.
                                  </p>
                                </div>
                              </Reveal.Content>
                            </Reveal>
                          </Grid.Column>
                          <Grid.Column id="ourVision">
                            <Reveal animated="fade">
                              <Reveal.Content visible>
                                <div id="ourVisionVisible">
                                  <p className="infoSegmentTitle">
                                    - Our mission -
                                  </p>
                                </div>
                              </Reveal.Content>
                              <Reveal.Content hidden>
                                <div id="ourVisionHidden">
                                  {" "}
                                  <p className="infoSegmentParagraph">
                                    Petrol and diesel car sales are banned from
                                    2030, solar power gets no real airtime. We
                                    are here to change that where people live
                                    more informed and more creative lives.
                                  </p>
                                </div>
                              </Reveal.Content>
                            </Reveal>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <div id="aboutUsBottomBanner">
                      <p id="meetTheTeamTitle">- Meet the team -</p>
                      <Grid id="meetTheTeam">
                        <Grid.Row columns={3}>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="A stickler for searching for meaning and purpose, even in small things!"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/alexPhoto.png"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">Alex Bellamy</p>
                            <p className="teamMemberTitles">
                              CEO and co-founder
                            </p>
                            <a href="mailto:alex@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                               <p>alex@wattswhat.co.uk</p>
                            </a>
                            <i
                              onClick={() =>
                                window.open("https://www.linkedin.com/in/alex-bellamy-0237441b4/")
                              }
                              id="alexLinkedInIcon"
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="Bla Bla Bla Bla Bla Bla Bla Bla Bla"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/FelixProfil.jpg"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">
                              Felix Oppong Willborg
                            </p>
                            <p className="teamMemberTitles">
                              COO and co-founder
                            </p>
                            <a href="mailto:felix@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                              <p>felix@wattswhat.co.uk</p>
                            </a>
                            <i
                              onClick={() =>
                                window.open("https://www.linkedin.com/in/felix-oppong-willborg-827b93b5/")
                              }
                              id="felixLinkedInIcon"
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Popup
                              position="bottom center"
                              content="Woff!"
                              on="hover"
                              inverted
                              trigger={
                                <Image
                                  verticalAlign="middle"
                                  src={"/images/TwinkyPhoto.jpg"}
                                  circular
                                  size="small"
                                />
                              }
                            />
                            <p className="teamMemberName">Twinky</p>
                            <p className="teamMemberTitles">
                              Head of Customer Satisfaction
                            </p>
                            <a href="mailto:hello@wattswhat.co.uk">
                              <Icon
                                name="mail"
                                size="big"
                                className="emailButton"
                              />
                                <p>hello@wattswhat.co.uk</p>
                            </a>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      <p id="ceoMessageTitle">- A message from our CEO -</p>
                      <p id="ceoMessage">
                        With our planet coming under increasing pressure from
                        global threats such as global warming, plastic clogging
                        up our oceans and deforestation, like most others it
                        concerns me what the world will be like for my
                        grandchildren and their offspring. Challenge the status
                        quo by investing in 100% clean and limitless solar
                        energy - and help change the world for tomorrow.
                      </p>
                      <p>Alex Bellamy, CEO Capybara UK</p>
                    </div>
                  </div>
                  <Segment raised id="ourAimsSegment">
                    <p id="ourAmbitionTitle">- Our ambition -</p>
                    <Grid id="ourAimsGrid">
                      <Grid.Row columns={5}>
                        <Grid.Column>
                          <img
                            alt="winner"
                            id="winner"
                            src="images/aboutUsPage/trophy.png"
                          />
                          <p>
                            Create a new eco initiative, where yes everyone is a
                            winner and a % of our profits are donated back to
                            society
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <img
                            alt="like"
                            id="like"
                            src="images/aboutUsPage/heart.png"
                          />
                          <p>
                            By obtaining a quote you are donating indirectly to
                            charity, no strings attached!
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <img
                            alt="money"
                            id="money"
                            src="images/aboutUsPage/money.png"
                          />
                          <p>
                            You will lower your energy bills and benefit from a
                            long-term steady investment, with returns better
                            than any bank
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <img
                            alt="handshake"
                            id="handshake"
                            src="images/aboutUsPage/thumbsUp.png"
                          />
                          <p>
                            Make solar energy easily accessible to all, matching
                            varying needs to our carefully selected partners
                          </p>
                        </Grid.Column>
                        <Grid.Column>
                          <img
                            alt="recycle"
                            id="recycle"
                            src="images/aboutUsPage/recycle.png"
                          />
                          <p>
                            Revolutionise the solar market, voice the benefits
                            of solar helping people live in a greener society
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <div id="ourAimsConclusion">
                    <Grid>
                      <Grid.Row columns={1}>
                        <Grid.Column>
                          <p id="conclusionOfOurAims">
                            Transparency, honesty and dedication to our
                            customers are a given
                          </p>
                          <Button
                            data-cy="button"
                            as={Link}
                            to={{ pathname: "/quotes" }}
                            id="quoteButton"
                          >
                            Feeling inspired? Click to obtain quotes
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default AboutUs;
