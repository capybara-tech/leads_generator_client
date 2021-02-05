import React, { useState } from "react";
import { Field } from "react-final-form";
import "./Electricity.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid, Icon, Popup } from "semantic-ui-react";

const Electricity = (props) => {
  const [fuseSize, setFuseSize] = useState("");

  return (
    <div id="electricity">
      <input type="hidden" name="fuse_size" value={fuseSize} />
      <Grid id="fuseSizeIcons">
        <div id="fuseSizeQuestionDiv">
          <p id="questionAskingForElectricity">
            <img
              id="fuseSizeQuestionImage"
              src="/images/questionLogo.png"
              alt="fuse size question"
            />{" "}
            {""}
            What is your main fuse size? (It's no problem if you don't know,
            leave and move onto the final question)
          </p>
        </div>
        <Grid.Row relaxed columns={4}>
          <Grid.Column>
            <button
              className="fuseSizeButtonIcons"
              id="16AIcon"
              type="button"
              onClick={() => setFuseSize("16A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/questionIcons/fuseSize/30.png"
                alt="16A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              className="fuseSizeButtonIcons"
              id="20AIcon"
              type="button"
              onClick={() => setFuseSize("20A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/questionIcons/fuseSize/60.png"
                alt="20A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              className="fuseSizeButtonIcons"
              id="25AIcon"
              type="button"
              onClick={() => setFuseSize("25A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/questionIcons/fuseSize/80.png"
                alt="25A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              className="fuseSizeButtonIcons"
              id="35AOrAboveIcon"
              type="button"
              onClick={() => setFuseSize("35A or above")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/questionIcons/fuseSize/80+.png"
                alt="35A or above"
              />
            </button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row relaxed columns={1}>
          <Grid.Column textAlign={"left"}>
            <h3 id="questionAskingForConsumption">
              What is your yearly electricity consumption?
            </h3>
            <Field
              id="fieldEnergyConsumption"
              name="energy_consumption"
              component="input"
              type="number"
              placeholder="Electricity consumption"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      ¯
      <Scrolllink
        to="roofDimensions"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        <Popup
          trigger={
            <Icon size="big" name="angle left" id="backToRoofDimensionsQ" />
          }
          content="Go back to previous question"
          inverted
          position="bottom center"
        />
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
  );
};

export default Electricity;