import React from "react";
import CreateContractor from "./CreateContractor";

const AdminHomePage = () => {
  return (
    <>
      <h2 data-cy="title">At your service...</h2>
      <CreateContractor />
    </>
  );
};

export default AdminHomePage;