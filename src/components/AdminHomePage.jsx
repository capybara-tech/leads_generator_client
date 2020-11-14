import React, { useState } from "react";
import ViewContractors from "./ViewContractors";
import CreateContractor from "./CreateContractor";
import Login from "./Login";
import { connect } from "react-redux";

const AdminHomePage = (props) => {
  const [viewContractors, setViewContractors] = useState(false);
  const [createContractor, setCreateContractor] = useState(false);
  let isUserAuthenticated = props.authenticated;
  let content;

  if (isUserAuthenticated === true) {
    content = (
      <>
        <h2 data-cy="title">At your service...</h2>
        <button id="view-contractors" onClick={setViewContractors}>
          View contractors
        </button>
        {viewContractors && <ViewContractors />}
        <button id="create-contractor" onClick={setCreateContractor}>
          Create contractor
        </button>
        {createContractor && <CreateContractor />}
      </>
    );
  } else {
    content = (
      <>
        <Login />
      </>
    );
  }
  return <>{content}</>;
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(AdminHomePage);