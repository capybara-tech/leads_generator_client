import React from "react";
import { Field } from "react-final-form";

const RoofDimensions = () => {
  return (
    <div>
      <Field name="gutter_height" component="input" type="text" placeholder="Gutter height"></Field>
      <Field name="roof_width" component="input" type="text" placeholder="Roof width"></Field>
      <Field name="roof_length" component="input" type="text" placeholder="Roof length"></Field>
    </div>
  );
};

export default RoofDimensions;