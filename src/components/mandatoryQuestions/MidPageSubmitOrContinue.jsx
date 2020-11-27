import React from "react";
import "./MidPageSubmitOrContinue.style.css";

const MidPageSubmitOrContinue = () => {
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
      </div>
      <button id="backToAddressQ">back</button>
      <button id="continueToIcons">continue</button>
    </div>
  );
};

export default MidPageSubmitOrContinue;