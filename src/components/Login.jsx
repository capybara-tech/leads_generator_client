import React, { Component } from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";
import { connect } from "react-redux";

class Login extends Component {

  authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      this.props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let loginForm, loginButton, loginMessage;

    (loginForm = <LoginForm authenticate={this.authenticate} />)

    return (
      <div>
        {loginForm}
        {loginButton}
        {loginMessage}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userEmail: state.currentUser.email, authenticated: state.authenticated };
};

export default connect(mapStateToProps)(Login);