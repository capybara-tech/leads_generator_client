import React, { useState } from "react";
import ViewContractors from "./ViewContractors";
import CreateContractor from "./CreateContractor";
import Login from "./Login";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'

const AdminHomePage = (props) => {
  const [viewContractors, setViewContractors] = useState(false);
  const [createContractor, setCreateContractor] = useState(false);
  let isUserAuthenticated = props.authenticated;
  let content;

  if (isUserAuthenticated === true) {
    content = (
      <>
        <h2 data-cy="title">At your service...</h2>
        <Button primary id="view-contractors" onClick={setViewContractors}>
          View contractors
        </Button>
        {viewContractors && <ViewContractors />}
        <Button primary id="create-contractor" onClick={setCreateContractor}>
          Create contractor
        </Button>
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