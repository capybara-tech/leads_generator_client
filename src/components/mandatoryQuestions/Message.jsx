import React from "react";
import {Modal} from "semantic-ui-react"

const Message = ({ message }) => {
  return (
    <div>
      <Modal open={message}>{message}</Modal>
    </div>
  );
};

export default Message;
