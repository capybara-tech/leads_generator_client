import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/generalPageContent/LandingPage";
import Navbar from "./components/generalPageContent/Navbar";
import Environment from "./components/generalPageContent/Environment";
import Economics from "./components/generalPageContent/Economics";
import AboutUs from "./components/generalPageContent/AboutUs";
import FAQs from "./components/generalPageContent/FAQs";
import QuotesPage from "./components/QuotesPage";
import Footer from "./components/generalPageContent/Footer";
import HowSolarWorks from "./components/generalPageContent/HowSolarWorks";
import HowItWorks from "./components/generalPageContent/HowItWorks";
import BecomeAPartner from "./components/generalPageContent/BecomeAPartner";
import TermsAndConditions from "./components/generalPageContent/Legals/TermsAndConditions";
import PrivacyPolicy from "./components/generalPageContent/Legals/PrivacyPolicy";
import Cookies from "./components/generalPageContent/Legals/Cookies";
import ContactUs from "./components/generalPageContent/ContactUs";
import AdminHomePage from "./components/admin/AdminHomePage";
import CookieNotice from "./components/generalPageContent/CookieNotice"
import { connect } from "react-redux";

const App = () => {

  useEffect(() => {
    // var Tawk_API = Tawk_API || {},
    //   Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5fe27444a8a254155ab5a1e7/1eq69ccfn";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/environment" component={Environment} />
        <Route path="/economics" component={Economics} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/quotes" component={QuotesPage} />
        <Route path="/howsolarworks" component={HowSolarWorks} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/partner" component={BecomeAPartner} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/adminhomepage" component={AdminHomePage} />
      </Switch>
      <Footer />
      <CookieNotice />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.currentUser.email,
  };
};
export default connect(mapStateToProps)(App);