import React from "react";
import { Form, Field } from "react-final-form";

const onSubmit = () => {};

const QuotesPage = () => {
  return (
    <>
      <h1 data-cy="title">Get up to three quotes</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: null,
          email: null,
        }}
        render={(props) => {
          const { handleSubmit, form, values } = props;
          return (
            <form data-cy="quote-form" onSubmit={handleSubmit}>
              <label>My name's Felix, what's yours?</label>
              <br />
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              ></Field>

              {values.name && values.name !== "false" && (
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                >
                  {({ input }) => {
                    return (
                      <>
                        {" "}
                        <br />
                        <label>
                          Thanks {values.name}, and your email address?
                        </label>{" "}
                        <br />
                        {values.name && values.name !== "false" && (
                          <input {...input} />
                        )}
                      </>
                    );
                  }}
                </Field>
              )}
              {values.email && values.email !== "false" && (
                <Field
                  name="telephone"
                  component="input"
                  type="text"
                  placeholder="Telephone"
                >
                  {({ input }) => {
                    return (
                      <>
                        {" "}
                        <br />
                        <label>
                          Great, and the best number to contact you on?
                        </label>{" "}
                        <br />
                        {values.email && values.email !== "false" && (
                          <input {...input} />
                        )}
                      </>
                    );
                  }}
                </Field>
              )}
              {values.telephone && values.telephone !== "false" && (
                <Field
                  name="address"
                  component="input"
                  type="text"
                  placeholder="Address"
                >
                  {({ input }) => {
                    return (
                      <>
                        {" "}
                        <br />
                        <label>
                          Lastly the address intend on turning green?
                        </label>{" "}
                        <br />
                        {values.telephone && values.telephone !== "false" && (
                          <input {...input} />
                        )}
                      </>
                    );
                  }}
                </Field>
              )}
            </form>
          );
        }}
      />
    </>
  );
};

export default QuotesPage;