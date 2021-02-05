import React, { useEffect } from "react";
import { Grid, Card } from "semantic-ui-react";
import "./FAQs.style.css";

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="faqsPage">
        <Grid>
          <Grid.Row id="faqTopBanner">
            <p id="faqTitle">Frequently asked questions</p>
          </Grid.Row>
          <div>
            <Card.Group centered={true} itemsPerRow={"3"} stackable>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>How does WattsWhat's service work?</Card.Header>
                  <Card.Description>
                    Straightforward and effortless. Click the get up to 3 quotes
                    button in the top right hand corner. Answer a few
                    straightforward questions, it takes less than two minutes,
                    three of our certified installers will be in contact with
                    you and shall provide quotes. As there’s a lot for our
                    professionals to consider they will more than likely arrange
                    a mutually convenient date to check our your roof. Three
                    quotes in no time and hassle free!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>
                    What is the cost for the quotes? (a heads up - free!)
                  </Card.Header>
                  <Card.Description>
                    Absolutely free, with no obligations. Quotes will be
                    provided directly to you by our solar installers.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>How many quotes will I receive?</Card.Header>
                  <Card.Description>
                    Three. When undertaking larger works, three quotes is
                    generally a good amount to cover the market and obtain a
                    competitive price alongside service.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>Are your installers certified?</Card.Header>
                  <Card.Description>
                    We have only partnered with MCS registered installers giving
                    you confidence that industry standards are followed and you
                    will be eligible for the current energy export schemes.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>
                    What are the disadvantages of solar panels?
                  </Card.Header>
                  <Card.Description>
                    Like everything in this world there are disadvantages. They
                    require lots of space and are they are not suitable for
                    every roof(our specialists will of course point this out if
                    the case!). They are pricy to install and not cheap to move
                    if you do. Whilst the return on investment (ROI) is one of
                    the best you can make, its over a relatively long period.
                    Efficiency is affected by the weather (although daylight is
                    enough for them to work just not at their best). Production
                    of the panels can also create pollution
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>
                    How can I get into contact with WattsWhat?
                  </Card.Header>
                  <Card.Description>
                    Start an instant chat by clicking the icon in the bottom
                    right hand corner of the screen. Alternatively, you can drop
                    us an email at capybara.it@gmail.com. We are here ready to
                    answer any questions or provide friendly advice.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card id="faqCards">
                <Card.Content>
                  <Card.Header>
                    As a solar professional, how do I partner with WattsWhat?
                  </Card.Header>
                  <Card.Description>
                    Drop us an email to capybara.it@gmail.com or start a live
                    chat to get the ball rolling. We are a genuine team here at
                    WattsWhat looking to collaborate and grow our expanding
                    network. We have a have a steady flow of jobs, there are no
                    subscription or sign up fees and you keep all of the revenue
                    from our referral apart from of course our minimal intro
                    fee.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default FAQs;
