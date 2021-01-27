import React, { useEffect } from "react";
import "./HowSolarWorks.style.css";
import { Card, Icon } from "semantic-ui-react";

const HowSolarWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="howSolarWorksContent">
      <h1 data-cy="title" id="howSolarWorksTitle">
        How do solar panels actually work?
      </h1>
      <h3 id="howSolarWorksSubTitle">
        Lets keep it simple, like the process itself:
      </h3>
      <div id="howSolarWorksCards">
        <Card.Group>
          <Card id="howSolarWorksCard1">
            <Card.Content>
              <Card.Header id="howSolarWorksNumber1">01</Card.Header>
              <br />
              <Card.Header id="howSolarWorksCardTitle1">
                Daylight
              </Card.Header>{" "}
              <br />
              <Card.Description id="howSolarWorksCardContent1">
                Not only sunshine, daylight hits the solar photovoltaic cells in
                the panels.
              </Card.Description> <br /> <br /> <br />
              <Card.Description>
                <Icon
                  id="howSolarWorksArrow1"
                  size="huge"
                  name="arrow circle right"
                />
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default HowSolarWorks;