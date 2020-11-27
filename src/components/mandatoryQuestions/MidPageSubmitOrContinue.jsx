import React from "react";
import "./MidPageSubmitOrContinue.style.css";
import { Link as Scrolllink } from "react-scroll";

const MidPageSubmitOrContinue = (props) => {
  return (
    <div id="midPageSubmitOrContinue">
      <div id="messageMidPage">
        <h3 id="midPageTitle">
          <span id="midPageWord">Awesome</span> you have reached the mid point
          of becoming greener
        </h3>
        <p>
          From now on you just have to click some icons to get a more accurate
          quote or you can choose to submit right now{" "}
        </p>
        <Scrolllink
          to="addressQuestion"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-0}
          duration={1500}
        >
          <button id="backToAddressQ">Back</button>
        </Scrolllink>
        <Scrolllink
          to="installationDate"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-0}
          duration={1500}
        >
          <button id="continueToIcons">Continue</button>
        </Scrolllink>
      </div>
      <button
        id="submitButton"
        data-cy="button"
        type="submit"
        onClick={props.onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default MidPageSubmitOrContinue;
