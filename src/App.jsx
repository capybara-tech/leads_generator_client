import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhySolar from './components/WhySolar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/whysolar' component={WhySolar}/>
      </Switch>
    </>
  );
};

export default App;
