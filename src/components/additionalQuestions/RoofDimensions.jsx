import React, { useState } from "react";
import { Field } from "react-final-form";
import Electricity from "./Electricity";
import "./RoofDimensions.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Icon } from "semantic-ui-react";

const RoofDimensions = (props) => {
  const components = [<Electricity />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="roofDimensions">
        <div id="questionForRoofDimensions">
          <h3 id="questionAskingForRoofDimensions">
            {" "}
            What's your roof <span id="dimesionWord">dimension</span>?
          </h3>
          <Field
            id="fieldGutterHeight"
            name="gutter_height"
            component="input"
            type="number"
            placeholder="Gutter height"
          />
          <Field
            id="fieldRoofWidth"
            name="roof_width"
            component="input"
            type="number"
            placeholder="Roof width"
          />
          <Field
            id="fieldRoofLength"
            name="roof_length"
            component="input"
            type="number"
            placeholder="Roof length"
          />
        </div>
        <Scrolllink
          id="nextToElectricity"
          to="electricity"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        >
          <button id="nextToElectricityQ">Next</button>
        </Scrolllink>
        <br />
        <Scrolllink
          to="roofDirection"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <Icon size="big" name="angle left" id="backToRoofDirectionQ" />
        </Scrolllink>
        <Scrolllink
          to="electricity"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        >
          <Icon size="big" name="angle right" id="skipToElectricityQ" />
        </Scrolllink>
        <button
          id="submitButton"
          data-cy="button"
          type="submit"
          onClick={props.onSubmit}
        >
          Submit
        </button>
      </div>
      {components[index]}
    </>
  );
};

export default RoofDimensions;