import React from "react";
import "./TelephoneQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";

const normaliseTelephone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 10) return `${onlyNums.slice(0, 10)}`;
};

const TelephoneQuestion = () => {
  return (
    <div id="telephoneQuestion">
      <div id="questionForTelephone">
        <h3 id="questionAskingForTelephone">
          Great, and the best number to <span id="contactWord">contact</span>{" "}
          you on?
        </h3>
        <Field
          id="fieldTelephone"
          name="telephone"
          component="input"
          type="text"
          placeholder="Telephone"
          parse={normaliseTelephone}
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
        <button id="backToEmailQ">Back</button>
      </Scrolllink>
      <Scrolllink
        to="addressQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <button id="nextToAddressQ"> Next</button>
      </Scrolllink>
    </div>
  );
};

export default TelephoneQuestion;