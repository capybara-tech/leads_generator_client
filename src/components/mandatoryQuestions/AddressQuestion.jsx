import React from "react";
import "./AddressQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const AddressQuestion = () => {
  return (
    <div id="addressQuestion">
      <div id="questionForAddress">
        <h3>
          Lastly the <span id="addressWord">address</span> intend on turning
          green?
        </h3>
        <Field
          id="fieldAddress"
          name="address"
          component="input"
          type="text"
          placeholder="Address"
        />
        <br />
      </div>
      <Scrolllink
        to="telephoneQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <button id="backToTelephoneQ">Back</button>
      </Scrolllink>
      <Scrolllink
        to="installationDate"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <button id="nextToIconQ">Next</button>
      </Scrolllink>
    </div>
  );
};

export default AddressQuestion;