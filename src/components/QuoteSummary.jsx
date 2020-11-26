import React from "react";

const QuoteSummary = ({ name, email, telephone, address }) => {
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{telephone}</p>
      <p>{address}</p>
    </>
  );
};
export default QuoteSummary;