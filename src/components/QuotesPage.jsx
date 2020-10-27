import React, { useState } from "react";
import axios from "axios";
import { Form, Field } from "react-final-form";

const normaliseTelephone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 10)
    return `${onlyNums.slice(0, 10)}`
}

const QuotesPage = () => {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let responseMessage, quoteParams, response;
    let { name, email, telephone, address } = event.target;

    try {
      quoteParams = {
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        address: address.value,
      };

      response = await axios.post("http://localhost:3000/api/v1/quotes", {
        quote: quoteParams,
      });

      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = error.response.data.errors;
    } finally {
      setMessage(responseMessage);
    }
  };

  return (
    <>
      <h1 data-cy="title">Get up to three quotes</h1>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: null,
        }}
        render={(props) => {
          const { values } = props;
          return (
            <form data-cy="quote-form" onSubmit={onSubmit}>
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
                  parse={normaliseTelephone}
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
              {values.telephone && values.telephone.length == 10 && (
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
              <button data-cy="button" type="submit">
                Submit
              </button>
            </form>
          );
        }}
      />
      {message && <p data-cy="message">{message}</p>}
    </>
  );
};

export default QuotesPage;
