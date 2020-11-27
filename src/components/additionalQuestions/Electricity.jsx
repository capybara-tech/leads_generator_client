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
        <h3 id="questionAskingForElectricity">
          What is your <span id="fuseSizeWord">fuse size</span>?
        </h3>
        <Grid.Row relaxed columns={4}>
          <Grid.Column>
            <button
              id="16AIcon"
              type="button"
              onClick={() => setFuseSize("16A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/dummylogo.png"
                alt="16A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              id="20AIcon"
              type="button"
              onClick={() => setFuseSize("20A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/dummylogo.png"
                alt="20A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              id="25AIcon"
              type="button"
              onClick={() => setFuseSize("25A")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/dummylogo.png"
                alt="25A"
              />
            </button>
          </Grid.Column>
          <Grid.Column>
            <button
              id="35AOrAboveIcon"
              type="button"
              onClick={() => setFuseSize("35A or above")}
            >
              <img
                className="imgFuseSizeIcons"
                src="/images/dummylogo.png"
                alt="35A or above"
              />
            </button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row relaxed columns={1}>
          <Grid.Column>
            <h3 id="questionAskingForElectricity">
              What is your yearly energy{" "}
              <span id="consuptionWord">consumption</span>?
            </h3>

            <Field
              id="fieldEnergyConsumption"
              name="energy_consumption"
              component="input"
              type="number"
              placeholder="Energy consumption"
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