import React from "react";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const NameQuestion = () => {
  return (
    <div id="nameQuestion">
      <label>My name's Felix, what's yours?</label>
      <br />
      <Field name="name" component="input" type="text" placeholder="Name" />
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
  );
};

export default NameQuestion;