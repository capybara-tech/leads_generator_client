import React from "react";
import "./EmailQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const EmailQuestion = () => {
  return (
    <div id="emailQuestion">
      <div id="questionForEmail">
        <Field
          id="fieldEmail"
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
        <br />
      </div>

      <Scrolllink
        id="emailBack"
        to="nameQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        <button id="backToNameQ">Back</button>
      </Scrolllink>
      <Scrolllink
        to="telephoneQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        <button id="nextToTelephoneQ">Next</button>
      </Scrolllink>
    </div>
  );
};

export default EmailQuestion;
