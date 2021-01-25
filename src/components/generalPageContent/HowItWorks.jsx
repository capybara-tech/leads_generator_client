import React, { useEffect } from "react";
import "./HowItWorks.style.css";
import { Card, Icon } from "semantic-ui-react";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="howItWorksContent">
      <h1 data-cy="title" id="howItWorksTitle">
        The WATTSWHAT way
      </h1>
      <h3 id="howItWorkssubTitle">
        It's effortless to find MCS certified, vetted and trusted solar
        installers.
      </h3>
      <div id="howItWorksCards">
        <Card.Group>
          <Card id="card1">
            <Card.Content>
              <Card.Header id="howItWorksNumber">01</Card.Header>
              <br />
              <Card.Header id="howItWorksCardTitle">
                Request 3 quotes - no obligation and free!
              </Card.Header>{" "}
              <br />
              <Card.Description id="howItWorksCardContent">
                You will firstly answer a few easy questions about your
                property. A heads up - give as much detail as possible for a
                more accurate quote. <br /> <br />
                We will connect you with selected partners across the UK, every
                job's covered. <br /> <br />
              </Card.Description>
              <Card.Description>
                <Icon
                  id="howItWorksArrow"
                  size="huge"
                  name="arrow circle right"
                />
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Get quotes</Card.Header>
              <Card.Description>
                We'll pass your details to 3 installers who will be in touch in
                lightning speed. <br /> <br />
                There's a lot for our professionals to consider when installing
                a solar panel system so its likely they will arrange a mutually
                convenient time to check out your property and to iron out any
                queries.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Choose your MCS professional</Card.Header>
              <Card.Description>
                Armed with quotes and recommendations you are all set to choose
                your tradesman.
                <br />
                <br /> We are against pushy sales practices or hidden costs!
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Job complete</Card.Header>
              <Card.Description>
                Once your panels are up, it would be helpful if you could drop
                us a line rating our partners reliability, work and value for
                money. <br />
                <br />
                Feedback rewards good work and holds the installer accountable
                for any (very rare)problems.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
      <p id="howItWorksconclusion">
        <br />
        Save time, money & hassle with us
      </p>
    </div>
  );
};

export default HowItWorks;