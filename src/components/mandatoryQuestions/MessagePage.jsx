import React from "react";
import { Link } from "react-router-dom";
import { Modal, Menu, Message } from "semantic-ui-react";

const MessagePage = ({ message }) => {
  return (
    <div>
      {message.length > 28 ? (
        <>
          {/* error message */}
          <Message error>
            <h4>{message}</h4>
          </Message>
        </>
      ) : (
        <>
          {/* success message */}
          <Modal basic open={message}>
            <Modal.Content>
              <h1>success</h1>
              <p>{message}</p>
              <Menu.Item as={Link} to={{ pathname: "/" }}>
                <button>Back to homepage</button>
              </Menu.Item>
            </Modal.Content>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MessagePage;
