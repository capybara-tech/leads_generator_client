import React, { useEffect } from "react";
import "./HowItWorks.style.css";
import { Card } from "semantic-ui-react";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="howItWorksContent">
      <h1 data-cy="title">The WATTSWHAT way</h1>
      <p>
        It's effortless to find MCS certified, vetted and trusted solar
        installers.
      </p>
      <div id="howItWorksCards">
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>
                Request 3 quotes - no obligation and free!
              </Card.Header>
              <Card.Description>
                You will firstly answer a few easy questions about your
                property. A heads up - give as much detail as possible for a
                more accurate quote. <br /> <br />
                We will connect you with selected partners across the UK, every
                job's covered.
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
      <p>Save time, money & hassle with us</p>
    </div>
  );
};

export default HowItWorks;