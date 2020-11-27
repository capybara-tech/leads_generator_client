import React, { useState } from "react";
import ViewContractors from "../admin/ViewContractors";
import CreateContractor from "./CreateContractor";
import QuoteSearch from "./QuoteSearch";
import Login from "../admin/Login";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'

const AdminHomePage = (props) => {
  const [viewContractors, setViewContractors] = useState(false);
  const [createContractor, setCreateContractor] = useState(false);
  const [quoteSearch, setQuoteSearch] = useState(false);
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
        <Button primary id="quotes" onClick={setQuoteSearch}>
          Quotes
        </Button>
        {quoteSearch && <QuoteSearch />}
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