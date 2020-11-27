import React from "react";
import "./Admin.style.css";

const QuoteSearchBox = ({ handleChange }) => {
  return (
    <>
      <input
        id="quoteSearch"
        type="search"
        placeholder="name, email, telephone, address"
        onChange={handleChange}
      ></input>
    </>
  );
};
export default QuoteSearchBox;