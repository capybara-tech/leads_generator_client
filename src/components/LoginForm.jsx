import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

const LoginForm = (props) => {
  return (
    <Segment placeholder>
      <h3 id="portal">Admin Login</h3>
      <Grid columns={1}>
        <Grid.Column>
          <Form onSubmit={props.authenticate} data-cy="login-form">
            <Form.Input
              id="email"
              data-cy="email"
              icon="user"
              iconPosition="left"
              label="Email"
              placeholder="Email"
            />
            <Form.Input
              id="password"
              data-cy="password"
              icon="lock"
              iconPosition="left"
              label="Password"
              placeholder="Password"
              type="password"
            />
            <Button content="Login" id="login-button" data-cy="button" />
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default LoginForm;