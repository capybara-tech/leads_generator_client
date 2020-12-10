import React from "react";
import { Modal } from "semantic-ui-react";

const Message = ({ message }) => {
  return (
    <div>
      {message.length > 28 ? (
        <>
          {/* error message */}
          <Modal basic open={message}>
            <Modal.Content>
              <h1>error</h1>
              <p>{message}</p>
            </Modal.Content>
          </Modal>
        </>
      ) : (
        <>
          {/* success message */}
          <Modal basic open={message}>
            <Modal.Content>
              <h1>success</h1>
              <p>{message}</p>
            </Modal.Content>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Message;
