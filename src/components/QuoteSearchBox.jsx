import React from "react";

const QuoteSearchBox = ({ handleChange }) => {
  return (
    <>
      <input
        type="search"
        onChange={handleChange}
      ></input>
    </>
  );
};
export default QuoteSearchBox;