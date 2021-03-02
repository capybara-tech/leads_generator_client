import React, { useState, useEffect } from "react";
import "./ExitIntentModal.style.css";
import { Modal, Card, Icon } from "semantic-ui-react";

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
                Obtain quotes now to be entered into our{" "}
                <span id="exitIntentHighlightedWord">free £100</span> cash prize
                draw*
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card.Description id="exitIntentDisclaimer">
                  We ask only those who are genuinely interested in solar to
                  request quotes
                </Card.Description>
                <Card.Description id="exitIntentSmallPrint">
                  *terms apply, see our terms and conditions
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