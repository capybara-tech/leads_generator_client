import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.style.css";
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
      <div id="aboutUsContent">
        <div id="aboutUsBanner">
          <p data-cy="title" id="aboutUsTitle">
            Making UK greener, <br /> one quote at the time
          </p>
          <p>
            Its simple, we promote the benefits of solar(hopefully winning you
            over!), you complete our online quote request and receive three
            quotes. Your solar quest then begins
          </p>
        </div>
        <Segment id="aboutUsSegmentInfo">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column id="ourCharitys">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="ourCharitysVisible">
                      <p>- Our charities -</p>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div id="ourCharitysHidden">
                      <p>
                        We love our planet so much as such we donate a massive
                        15% of our net profits to other green initiatives.
                        <br />
                        <br />
                        By completing our straightforward online quote request
                        form you are indirectly donating to charity.
                      </p>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
              <Grid.Column id="ourVision">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="ourVisionVisible">
                      <p>- Our mission -</p>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div id="ourVisionHidden">
                      {" "}
                      <p>
                        Petrol and diesel car sales are banned from 2030, solar
                        power gets no real airtime. We are here to change that
                        where people live more informed and more creative lives.
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
                      src={
                        "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      }
                      circular
                      size="small"
                    />
                  }
                />
                <p className="teamMemberName">Alex Bellamy</p>
                <p className="teamMemberTitles">CEO and co-founder</p>
                <Icon name="mail" size="big" />
                {/* fix email link */}
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
                      src={
                        "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      }
                      circular
                      size="small"
                    />
                  }
                />
                <p className="teamMemberName">Felix Oppong Willborg</p>
                <p className="teamMemberTitles">COO and co-founder</p>
                <Icon name="mail" size="big" />
                {/* fix email link */}
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
                      src={
                        "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      }
                      circular
                      size="small"
                    />
                  }
                />
                <p className="teamMemberName">Twinky</p>
                <p className="teamMemberTitles">
                  Head of Customer Satisfaction
                </p>
                <Icon name="mail" size="big" />
                {/* fix email link */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <p id="ceoMessageTitle">- A message from our CEO -</p>
          <p id="ceoMessage">
            With our planet coming under increasing pressure from global threats
            such as global warming, plastic clogging up our oceans and
            deforestation, like most others it concerns me what the world will
            be like for my grandchildren and their offspring. Challenge the
            status quo by investing in 100% clean and limitless solar energy -
            and help change the world for tomorrow.
          </p>
          <p>Alex Bellamy, CEO Capybara UK</p>
        </div>
        <div id="middleSegment">
          <p id="ourAmbitionTitle">- Our ambition -</p>
        </div>
      </div>
      <Segment id="ourAimsSegment">
        <Grid id="ourAimsGrid">
          <Grid.Row columns={5}>
            <Grid.Column>
              <Icon id="winner" name="winner" size="massive" />
              <p>
                Create a new eco initiative, where yes everyone is a winner and
                a % of our profits are donated back to society
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon id="like" name="like" size="massive" />
              <p>
                By obtaining a quote you are donating indirectly to charity, no
                strings attached!
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon id="money" name="money" size="massive" />
              <p>
                You will lower your energy bills and benefit from a long-term
                steady investment, with returns better than any bank
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon id="handshake" name="handshake" size="massive" />
              <p>
                Make solar energy easily accessible to all, matching varying
                needs to our carefully selected partners
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon id="recycle" name="recycle" size="massive" />
              <p>
                Revolutionise the solar market, voice the benefits of solar
                helping people live in a greener society
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
                Transparency, honesty and dedication to our customers are a
                given
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
  );
};

export default AboutUs;