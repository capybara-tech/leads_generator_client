import React from "react";
import "./NameQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const NameQuestion = () => {
  return (
      <div id="nameQuestion">
        <h1 data-cy="title">Get up to three quotes</h1>
        <div id="questionForName">
        <h3>My name's Felix, what's yours?</h3>
        <br />
        <Field
          id="fieldName"
          name="name"
          component="input"
          type="text"
          placeholder="Name"
        />
        <br />
        <Scrolllink
          to="emailQuestion"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-250}
          duration={1500}
        >
          Next
        </Scrolllink>
        </div>
      </div>
  );
};

export default NameQuestion;
