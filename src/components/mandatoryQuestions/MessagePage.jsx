import React from "react";
import { Link } from "react-router-dom";
import { Modal, Menu, Card, Icon, Button } from "semantic-ui-react";
import "./MessagePage.style.css";

const MessagePage = ({ message }) => {
  return (
    <div>
      {message.length > 28 ? (
        <>
          {/* error message */}
          {alert(
            "Somthing went wrong, please try again - perhaps you forgot to fill out your address?"
          )}
        </>
      ) : (
        <>
          {/* success message */}
          <Modal basic open={message}>
            <Modal.Content>
              <Card id="successCard" centered={true}>
                <Card.Content id="successMessageContent" textAlign="center">
                  <Card.Header>
                    <Icon name="check" size="huge" />
                    <br />
                    <br />
                  </Card.Header>
                  <Card.Header>YAY!</Card.Header>
                  <Card.Description data-cy="message">
                    sit back & relax, our partners will contact in no time at
                    all
                    <br />
                    <br />
                    <Menu.Item as={Link} to={{ pathname: "/" }}>
                      <Button id="successMessageButton">Back</Button>
                    </Menu.Item>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Modal.Content>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MessagePage;
