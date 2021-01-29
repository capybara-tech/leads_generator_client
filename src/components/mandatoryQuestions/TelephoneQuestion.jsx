import React from "react";
import "./TelephoneQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";
import { Popup, Icon } from "semantic-ui-react";

const normaliseTelephone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 10) return `${onlyNums.slice(0, 10)}`;
};

const TelephoneQuestion = () => {
  return (
    <div id="telephoneQuestion">
      <div id="telephoneQuestionDiv">
        <div id="questionForTelephone">
          <p id="questionAskingForTelephone">
            <img
              id="nameQuestionImage"
              src="/images/questionLogo.png"
              alt="telephone question"
            />{" "}
            {""}
            Great, and the best number to contact you on?
          </p>
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
      </div>
      <Scrolllink
        to="emailQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <Popup
          trigger={<Icon size="big" name="angle left" id="backToEmailQ" />}
          content="Back to previous question"
          inverted
          position="bottom center"
        />
      </Scrolllink>
      <Scrolllink
        to="addressQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <Popup
          trigger={<Icon size="big" name="angle right" id="nextToAddressQ" />}
          content="Next question"
          inverted
          position="bottom center"
        />
      </Scrolllink>
    </div>
  );
};

export default TelephoneQuestion;