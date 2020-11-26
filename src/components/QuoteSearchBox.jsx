import React from "react";

const QuoteSearchBox = ({ handleChange }) => {
  return (
    <>
      <input
        type="search"
        placeholder="name..."
        onChange={handleChange}
      ></input>
    </>
  );
};
export default QuoteSearchBox;