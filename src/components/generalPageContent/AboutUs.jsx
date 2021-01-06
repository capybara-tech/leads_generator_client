import React from "react";
import "./AboutUs.style.css";
import { Segment, Reveal, Image, Grid } from "semantic-ui-react";
const AboutUs = () => {
  return (
    <>
      <div id="aboutUsContent">
        <div id="aboutUsBanner">
          <h1>About us.</h1>
        </div>
        <Segment id="aboutUsSegmentInfo">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column id="meetTheTeam">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="meetTheTeamVisible">
                      <h3>Meet the team</h3>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div id="meetTheTeamHidden">
                      <div>
                        <Image
                          verticalAlign="middle"
                          src={
                            "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                          }
                          size="tiny"
                          circular
                        />
                        <br />
                        <h5>Alex Bellamy</h5>
                        <p>
                          A stickler for searching for meaning and purpose, even
                          in small things!
                        </p>
                        <p>CEO and co-founder</p>

                        <p>alex@capybara.com</p>
                      </div>
                      <div>
                        <Image
                          verticalAlign="middle"
                          src={
                            "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                          }
                          size="tiny"
                          circular
                        />
                        <br />
                        <h5>Felix Oppong Willborg</h5>
                        <p>bla bla bla bla bla bla</p>
                        <p>COO and co-founder</p>

                        <p>felix@capybara.com</p>
                      </div>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>

              <Grid.Column id="ourCharitys">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="ourCharitysVisible">
                      <h3>Our charities</h3>
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
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column id="ourVision">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="ourVisionVisible">
                      <h3>Our mission</h3>
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

              <Grid.Column id="ourAims">
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <div id="ourAimsVisible">
                      {" "}
                      <h3>Our aims</h3>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div id="ourAimsHidden">
                      <p>
                        Create a new eco initiative, where yes everyone is a
                        winner and a % of our profits are donated back to
                        society
                        <br />
                        By obtaining a quote you are donating indirectly to
                        charity, no strings attached!
                        <br />
                        You will lower your energy bills and benefit from a
                        long-term steady investment, with returns better than
                        any bank
                        <br />
                        Make solar energy easily accessible to all, matching
                        varying needs to our carefully selected partners
                        <br />
                        Revolutionise the solar market, voice the benefits of
                        solar helping people live in a greener society
                        <br />
                        Transparency, honesty and dedication to our customers
                        are a given
                      </p>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <div id="aboutUsBottomBanner">
          <h2>A message from our CEO</h2>
          <h4>
            With our planet coming under increasing pressure from global threats
            such as global warming, plastic clogging up our oceans and
            deforestation, like most others it concerns me what the world will
            be like for my grandchildren and their offspring. Challenge the
            status quo by investing in 100% clean and limitless solar energy -
            and help change the world for tomorrow.
          </h4>
          <p>Alex Bellamy, CEO Capybara UK</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
