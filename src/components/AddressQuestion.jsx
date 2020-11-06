import React from "react";
import { Field } from "react-final-form";

const AddressQuestion = () => {
  return (
    <div id="addressQuestion">
      <Field
        name="address"
        component="input"
        type="text"
        placeholder="Address"
      />
    </div>
  );
};

export default AddressQuestion;
