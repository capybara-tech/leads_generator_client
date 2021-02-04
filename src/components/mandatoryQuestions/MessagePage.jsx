import React from "react";
import { Link } from "react-router-dom";
import { Modal, Menu, Card, Image, Button } from "semantic-ui-react";

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
              <Card>
                <Image src="/images/sucessTick.png" />
                <Card.Content textAlign="center">
                  <Card.Header>
                    YAY!
                    <br /> Nothing went wrong!
                  </Card.Header>
                  <Card.Description>
                    Now you just have to sit tight and our partners will shortly
                    contact you with some great offers.
                  </Card.Description>
                  <Menu.Item as={Link} to={{ pathname: "/" }}>
                    <Button>Back to homepage</Button>
                  </Menu.Item>
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
