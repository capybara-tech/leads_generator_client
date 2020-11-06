import React from 'react'
import { Field } from "react-final-form";

const normaliseTelephone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 10) return `${onlyNums.slice(0, 10)}`;
};

const TelephoneQuestion = () => {
  return (
    <div id="telephoneQuestion">
      <Field
        name="telephone"
        component="input"
        type="text"
        placeholder="Telephone"
        parse={normaliseTelephone}
      />
    </div>
  )
}

export default TelephoneQuestion
