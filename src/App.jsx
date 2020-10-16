import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import WhySolar from "./components/WhySolar";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import QuotesPage from "./components/QuotesPage";
import Footer from "./components/Footer";
import AdminHomePage from "./components/AdminHomePage"
import { connect } from "react-redux";

const App = (props) => {
  //let content, login

  //if (props.authenticated) {
    //content = (
     // <>
     //   <AdminHomePage />
      //</>
    //)
  //} else {
   // login = <Login />
 // }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/whysolar" component={WhySolar} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/quotes" component={QuotesPage} />
        <Route path="/adminhomepage" component={AdminHomePage} />
      </Switch>
      <Footer />

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.currentUser.email
  };
};
export default connect(mapStateToProps)(App);