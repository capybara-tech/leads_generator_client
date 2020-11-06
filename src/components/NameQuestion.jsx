import React from "react";
import { Field } from "react-final-form";

const NameQuestion = () => {
  return (
    <div>
      <div id="nameQuestion">
        <label>My name's Felix, what's yours?</label>
        <br />
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Name"
        ></Field>
      </div>
    </div>
  );
};

export default NameQuestion;
