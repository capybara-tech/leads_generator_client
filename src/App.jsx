import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/generalPageContent/LandingPage";
import Navbar from "./components/Navbar";
import WhySolar from "./components/generalPageContent/WhySolar";
import Environment from "./components/generalPageContent/Environment";
import Economics from "./components/generalPageContent/Economics";
import AboutUs from "./components/generalPageContent/AboutUs";
import FAQs from "./components/generalPageContent/FAQs";
import QuotesPage from "./components/QuotesPage";
import HowItWorks from "./components/generalPageContent/HowItWorks";
import Footer from "./components/Footer";
import AdminHomePage from "./components/AdminHomePage";
import { connect } from "react-redux";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/whysolar" component={WhySolar} />
        <Route path="/environment" component={Environment} />
        <Route path="/economics" component={Economics} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/quotes" component={QuotesPage} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/adminhomepage" component={AdminHomePage} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.currentUser.email,
  };
};
export default connect(mapStateToProps)(App);