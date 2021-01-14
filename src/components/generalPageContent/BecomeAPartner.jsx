import React, { useEffect } from "react";
import "./BecomeAPartner.style.css";
import { Card, Reveal } from "semantic-ui-react";

const BecomeAPartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="becomeAPartnerContent">
        <h1 id="title" data-cy="title">
          Join #TEAMSOLSPANA
        </h1>
        <p id="subTitle">
          Get a <span id="highlightedWord">steady flow of jobs*</span>, reduce
          your admin & <span id="highlightedWord">keep all revenue</span> from
          our referral(apart from of course our minimal intro fee).
        </p>
        <div id="cardGroup">
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>Customer satisfaction</Card.Header>
                    <Card.Description>
                      We love our customers and want you too so its important
                      that you provide a first class service at all times.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>100%</Card.Header>
                    <Card.Description>Nothing less!</Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Reveal.Content>
          </Reveal>
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>MCS certified</Card.Header>
                    <Card.Description>
                    With the regulated society we now live in, the only other condition is that you are MCS registered.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>No offense</Card.Header>
                    <Card.Description>It's what our customers expect!</Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Reveal.Content>
          </Reveal>
        </div>
        <br /> <br />
        <p id="subTitle">
          Say goodbye to tedious paperwork, simply drop us an <span id="highlightedWord">email</span> or <span id="highlightedWord">start a
          live chat</span> to get the ball rolling.
        </p>
        <p id="signOff">
          Join our quest to make the UK more energy efficient.
        </p> <br /> <br /> 
        <p id="condition">*based on location</p>
      </div>
    </>
  );
};

export default BecomeAPartner;