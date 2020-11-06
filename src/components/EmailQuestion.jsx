import React from "react";
import { Field } from "react-final-form";

const EmailQuestion = () => {
  return (
    <div>
      <div id="emailQuestion">
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        ></Field>{" "}
        <br />
      </div>
    </div>
  );
};

export default EmailQuestion;
