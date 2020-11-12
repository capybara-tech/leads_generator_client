import React from "react";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const EmailQuestion = () => {
  return (
    <div>
      <div id="emailQuestion">
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        ></Field>{" "}
        <br />
        <Scrolllink
          to="telephoneQuestion"
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

export default EmailQuestion;