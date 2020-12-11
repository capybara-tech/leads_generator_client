import React from "react";
import { Link } from "react-router-dom";
import { Modal, Menu } from "semantic-ui-react";

const MessagePage = ({ message }) => {
  return (
    <div>
      {message.length > 28 ? (
        <>
          {/* error message */}
        {alert("Somthing went wrong, please try again - perhaps you forgot to fill out your address?")}
        </>
      ) : (
        <>
          {/* success message */}
          <Modal basic open={message}>
            <Modal.Content>
              <h1>Success</h1>
              <p data-cy="message">{message}</p>
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