import React from "react";
import "./NameQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const NameQuestion = () => {
  return (
    <div id="nameQuestion">
      <div id="questionForName">
        <h3 id="openingQuestion" data-cy="title">
          <span id="helloWord">Hello!</span> My name's Felix, what's yours?
        </h3>
        <Field
          id="fieldName"
          name="name"
          component="input"
          type="text"
          placeholder="Name..."
        />
        <br />
      </div>
      <Scrolllink
        to="emailQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <button id="nextToEmailQ">Next</button>
      </Scrolllink>
    </div>
  );
};

export default NameQuestion;
