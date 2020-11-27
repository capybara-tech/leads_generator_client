import React from "react";
import LoginForm from "./LoginForm";
import auth from "./modules/auth";
import { connect } from "react-redux";

const Login = (props) => {

  const authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email },
        },
      });
    } catch (error) {
      props.dispatch({
        type: "FAIL_AUTHENTICATE",
        payload: {
          errorMessage: error.response.data.errors[0],
        },
      });
    }
  };

    let loginForm, loginButton, loginMessage;
    (loginForm = <LoginForm authenticate={authenticate} />)

    return (
      <div>
        {loginForm}
        {loginButton}
        {loginMessage}
        <p>{props.errorMessage}</p>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return { userEmail: state.currentUser.email, authenticated: state.authenticated,  errorMessage: state.errorMessage };
};

export default connect(mapStateToProps)(Login);