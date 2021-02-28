import React, { useState, useEffect } from "react";

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
      <h1>pop up message</h1>
      <button onClick={close}>close</button>
    </div>
  ) : null;
};
export default ExitIntentModal;