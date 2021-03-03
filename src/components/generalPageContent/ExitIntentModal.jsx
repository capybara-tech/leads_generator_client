import React, { useState, useEffect } from "react";
import "./ExitIntentModal.style.css";
import { Link } from "react-router-dom";
import { Modal, Card, Button, Icon } from "semantic-ui-react";

const ExitIntentModal = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const close = () => {
    setShow(false);
  };

  return show ? (
    <div>
      <Modal basic open={props.show}>
        <Modal.Content>
          <Card id="exitIntentCard" centered={true}>
            <Card.Content id="exitIntentContent">
              <Card.Header id="exitIntentHeader">
                Don't leave yet!
                <br />
              </Card.Header>
              <Card.Description id="exitIntentContent">
                By installing solar you will dramatically <span id="exitIntentHighlightedWord">reduce your carbon footprint overnight by up to 2 tonnes of CO2/year.</span> <br /> <br />
                Also, <span id="exitIntentHighlightedWord">donate indirectly to charity</span>. We help fund other eco initiatives from each quote request.
                <br />
                <br />
                <Button
                  as={Link}
                  to={{ pathname: "/quotes" }}
                  id="exitIntentQuoteButton"
                  onClick={close}
                >
                  Click to get your 3 quotes
                </Button>
                <Card.Description id="exitIntentDisclaimer">
                  We ask only those who are genuinely interested in solar
                  request quotes
                </Card.Description>
                <br />
              </Card.Description>
              <button id="exitIntentExitButton" onClick={close}>
                <Icon id="exitIntentExitIcon" name="cancel" size="huge" />
              </button>
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    </div>
  ) : null;
};

export default ExitIntentModal;