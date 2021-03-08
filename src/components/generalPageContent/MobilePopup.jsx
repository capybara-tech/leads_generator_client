import React, { useState, useEffect } from "react";
import "./MobilePopup.style.css";
import { Link } from "react-router-dom";
import { Modal, Card, Button, Icon } from "semantic-ui-react";

const MobilePopup = (props) => {
  const [showPopupMobile, setShowMobilePopup] = useState(props.showMobilePopup);

  useEffect(() => {
    setTimeout(() => {
      setShowMobilePopup(true);
    }, 10000);
  }, [props.showPopupMobile]);

  const close = () => {
    setShowMobilePopup(false);
  };

  return showPopupMobile ? (
    <div>
      <Modal basic open={showPopupMobile}>
        <Modal.Content>
          <Card id="mobilePopupCard" centered={true}>
            <Card.Content id="mobilePopupContent">
              <Card.Header id="mobilePopupHeader">
                Did you know!
                <br />
              </Card.Header>
              <Card.Description id="mobilePopupContent">
                By installing solar you will dramatically{" "}
                <span id="mobilePopupHighlightedWord">
                  reduce your carbon footprint overnight by up to 2 tonnes of
                  CO2/year.
                </span>{" "}
                <br /> <br />
                Also,{" "}
                <span id="mobilePopupHighlightedWord">
                  donate indirectly to charity
                </span>
                . We help fund other eco initiatives from each quote request.
                <br />
                <br />
                <Button
                  as={Link}
                  to={{ pathname: "/quotes" }}
                  id="mobilePopupQuoteButton"
                  onClick={close}
                >
                  Click to get your 3 quotes
                </Button>
                <Card.Description id="mobilePopupDisclaimer">
                  We ask only those who are genuinely interested in solar
                  request quotes
                </Card.Description>
              </Card.Description>
              <button id="mobilePopupExitButton" onClick={close}>
                <Icon id="mobilePopupExitIcon" name="cancel" size="huge" />
              </button>
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    </div>
  ) : null;
};

export default MobilePopup;