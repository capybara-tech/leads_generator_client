import React, { useState } from "react";
import axios from "axios";
import { Form, Field } from "react-final-form";
// import { Checkbox } from "semantic-ui-react"

const normaliseTelephone = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 10) return `${onlyNums.slice(0, 10)}`;
};

const QuotesPage = () => {
  // const [isChecked, setIsChecked] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    debugger
    event.preventDefault();
    let responseMessage, quoteParams, response;
    let {
      name,
      email,
      telephone,
      address,
      installation_date,
      // roof_slope,
      // roof_type,
      // roof_direction,
      // gutter_height,
      // roof_width,
      // roof_length,
      // fuse_size,
      // energy_consumption,
    } = event.target;

    try {
      quoteParams = {
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        address: address.value,
        installation_date: installation_date.value,
        // roof_slope: roof_slope.value,
        // roof_type: roof_type.value,
        // roof_direction: roof_direction.value,
        // gutter_height: gutter_height.value,
        // roof_width: roof_width.value,
        // roof_length: roof_length.value,
        // fuse_size: fuse_size.value,
        // energy_consumption: energy_consumption.value,
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
              {values.email &&
                values.email.includes("@") &&
                values.email.includes(".") && (
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
                          {values.email &&
                            values.email.includes("@") &&
                            values.email.includes(".") && <input {...input} />}
                        </>
                      );
                    }}
                  </Field>
                )}
              {values.telephone && values.telephone.length === 10 && (
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
              {values.address && values.address !== "false" && (
                <Field component="select">
                  {({}) => {
                    return (
                      <>
                     
                        {" "}
                        {values.name && values.name !== "false" && (
                          <>
                            <p>
                              Thank you, from now on you just have to click some
                              icons to get a more accurate quote or you can
                              choose to submit right now
                            </p>
                            <button>Next</button>
                            <button>Submit</button>
                            <h2>Time period</h2>
                            {/* <Checkbox
                            value="installation_date"
                            name="0-3 monthes"
                            checked={e => IsChecked(e.target.value) }
                            // onChange={iconChange}
                            // checked={(event) => {
                            //   iconChange()
                            // }} 
                            />
                            <Checkbox
                            name="installation_date"
                            value="3-6 monthes"/>
                            <Checkbox
                            name="installation_date"
                            value="6-12 monthes"/>
                            <Checkbox
                            name="installation_date"
                            value="12 monthes +"/> */}
                          </>
                        )}
                      </>
                    );
                  }}
                </Field>
              )}
              <button type="submit">submit!!</button>
            </form>
          );
        }}
      />
      {message && <p data-cy="message">{message}</p>}
    </>
  );
};

export default QuotesPage;
