import React from "react";
import { Field } from "react-final-form";

const RoofDimensions = () => {
  return (
    <div>
      <Field
        name="gutter_height"
        component="input"
        type="number"
        placeholder="Gutter height"
      ></Field>
      <Field
        name="roof_width"
        component="input"
        type="number"
        placeholder="Roof width"
      ></Field>
      <Field
        name="roof_length"
        component="input"
        type="number"
        placeholder="Roof length"
      ></Field>
    </div>
  );
};

export default RoofDimensions;
