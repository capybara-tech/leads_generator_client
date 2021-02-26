import React, { useEffect } from "react";
import "./BecomeAPartner.style.css";
import Media from "react-media";
import { Card } from "semantic-ui-react";

const BecomeAPartner = () => {
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
                <div id="becomeAPartnerContentMobile">
                  <p id="titleJoinTeamMobile" data-cy="title">
                    Become a partner
                  </p>
                  <p id="subTitleJoinTeamMobile">
                    Get a <span id="highlightedWord">steady flow of jobs*</span>
                    , reduce your admin &{" "}
                    <span id="highlightedWord">keep all revenue</span> from our
                    referral(apart from of course our minimal intro fee).
                  </p>
                  <div id="cardGroupMobile">
                    <Card.Group centered={true}>
                      <Card id="joinTeamCard1">
                        <Card.Content>
                          <Card.Header>Customer satisfaction</Card.Header>
                          <Card.Description>
                            We love our customers and want you too so its
                            important that you provide a first class service at
                            all times.
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      <Card id="joinTeamCard2">
                        <Card.Content>
                          <Card.Header>MCS certified</Card.Header>
                          <Card.Description>
                            With the regulated society we now live in, the only
                            other condition is that you are MCS registered.
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </div>
                  <br /> <br />
                  <p id="subTitleJoinTeamMobile">
                    Say goodbye to tedious paperwork, simply drop us an{" "}
                    <span id="highlightedWord">email</span> or{" "}
                    <span id="highlightedWord">start a live chat</span> to get
                    the ball rolling.
                  </p>
                  <p id="signOffJoinTeamMobile">
                    Join our quest to make the UK more energy efficient.
                  </p>{" "}
                  <br /> <br />
                  <p id="conditionMobile">*based on location</p>
                </div>
              )}
              {matches.desktop && (
                <div id="becomeAPartner">
                  <div id="becomeAPartnerContent">
                    <h1 id="titleBecomePartner" data-cy="title">
                      Become a partner
                    </h1>
                    <p id="subTitleBecomePartner">
                      Get a{" "}
                      <span id="highlightedWord">steady flow of jobs*</span>,
                      reduce your admin &{" "}
                      <span id="highlightedWord">keep all revenue</span> from
                      our referral(apart from of course our minimal intro fee).
                    </p>
                    <div id="cardGroupBecomePartner">
                      <Card.Group>
                        <Card id="becomePartnerCard1">
                          <Card.Content>
                            <Card.Header>Customer satisfaction</Card.Header>
                            <Card.Description>
                              We love our customers and want you too so its
                              important that you provide a first class service
                              at all times.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card id="becomePartnerCard2">
                          <Card.Content>
                            <Card.Header>MCS certified</Card.Header>
                            <Card.Description>
                              With the regulated society we now live in, the
                              only other condition is that you are MCS
                              registered.
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Card.Group>
                    </div>
                    <br /> <br />
                    <p id="subTitleBecomePartner">
                      Say goodbye to tedious paperwork, simply drop us an{" "}
                      <span id="highlightedWord">email</span> or{" "}
                      <span id="highlightedWord">start a live chat</span> to get
                      the ball rolling.
                    </p>
                    <p id="signOffBecomePartner">
                      Join our quest to make the UK more energy efficient.
                    </p>{" "}
                    <br /> <br />
                    <p id="conditionBecomePartner">*based on location</p>
                  </div>
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default BecomeAPartner;
