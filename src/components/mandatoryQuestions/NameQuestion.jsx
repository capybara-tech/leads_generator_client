import React from "react";
import "./NameQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Popup, Icon } from "semantic-ui-react";

const NameQuestion = () => {
  return (
    <>
      <div>
        <Media
          queries={{
            mobile: "(max-width: 599px)",
            desktop: "(min-width: 600px)",
          }}
        >
          {(matches) => (
            <>
              {matches.mobile && (
                <div id="nameQuestionMobile">
                  <div id="nameQuestionDiv">
                    <div id="questionForName">
                      <p id="openingQuestion" data-cy="title">
                        <img
                          id="nameQuestionImage"
                          src="/images/questionLogo.png"
                          alt="name question"
                        />{" "}
                        {""}
                        Hello! My name's Felix, what's yours?
                      </p>
                      <Field
                        id="fieldNameMobile"
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name..."
                      />{" "}
                    </div>
                    <br />
                  </div>
                  
                </div>
              )}
              {matches.desktop && (
                <div id="nameQuestion">
                  <div id="nameQuestionDiv">
                    <div id="questionForName">
                      <p id="openingQuestion" data-cy="title">
                        <img
                          id="nameQuestionImage"
                          src="/images/questionLogo.png"
                          alt="name question"
                        />{" "}
                        {""}
                        Hello! My name's Felix, what's yours?
                      </p>
                      <Field
                        id="fieldName"
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name..."
                      />{" "}
                    </div>
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
                    <Popup
                      trigger={
                        <Icon size="big" name="angle right" id="nextToEmailQ" />
                      }
                      content="Next question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default NameQuestion;
