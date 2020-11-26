import React from "react";

const QuoteSearchBox = ({ handleChange }) => {
  return (
    <>
      <input
        type="search"
        placeholder="name, email, telephone, address"
        onChange={handleChange}
      ></input>
    </>
  );
};
export default QuoteSearchBox;