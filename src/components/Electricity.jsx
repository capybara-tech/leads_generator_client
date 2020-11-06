import React, { useState } from "react";
import { Field } from "react-final-form";

const Electricity = () => {
  const [fuseSize, setFuseSize] = useState("");

  return (
    <div>
      <h2>What is your fuse size?</h2>
      <input type="hidden" name="fuse_size" value={fuseSize} />
      <button id="16AIcon" type="button" onClick={() => setFuseSize("16A")}>
        <img src="/images/dummylogo.png" alt="16A" />
      </button>
      <button id="20AIcon" type="button" onClick={() => setFuseSize("20A")}>
        <img src="/images/dummylogo.png" alt="20A" />
      </button>
      <button id="25AIcon" type="button" onClick={() => setFuseSize("25A")}>
        <img src="/images/dummylogo.png" alt="25A" />
      </button>
      <button id="35AIcon" type="button" onClick={() => setFuseSize("35A")}>
        <img src="/images/dummylogo.png" alt="35A" />
      </button>
      <button id="35A+Icon" type="button" onClick={() => setFuseSize("35A+")}>
        <img src="/images/dummylogo.png" alt="35A+" />
      </button>

      <h2>What is your yearly energy consumption?</h2>
      <Field
        name="energy_consumption"
        component="input"
        type="number"
        placeholder="Energy consumption"
      ></Field>
    </div>
  );
};

export default Electricity;