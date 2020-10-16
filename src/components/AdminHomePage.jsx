import React from "react";
import CreateContractor from "./CreateContractor";
import Login from "./Login";
import { connect } from "react-redux";

const AdminHomePage = (props) => {
  let isUserAuthenticated = props.authenticated;
  let content;

  if (isUserAuthenticated === true) {
    content = (
      <>
        <h2 data-cy="title">At your service...</h2>
        <CreateContractor />
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