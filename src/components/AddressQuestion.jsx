import React from "react";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const AddressQuestion = () => {
  return (
    <div id="addressQuestion">
      <Field
        name="address"
        component="input"
        type="text"
        placeholder="Address"
      />
      <br />
      <Scrolllink
        to="telephoneQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Next
      </Scrolllink>
    </div>
  );
};

export default AddressQuestion;