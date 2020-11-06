import React, { useState } from "react";
import NameQuestion from "./NameQuestion";
import EmailQuestion from "./EmailQuestion";
import PropertyType from "./PropertyType";
import InstallationDate from "./InstallationDate";
import RoofSlope from "./RoofSlope";
import RoofType from "./RoofType";
import RoofDirection from "./RoofDirection";
import RoofDimensions from "./RoofDimensions";
import Electricity from "./Electricity";
import axios from "axios";
import { Form, Field } from "react-final-form";
import TelephoneQuestion from "./TelephoneQuestion";



const QuotesPage = () => {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let responseMessage, quoteParams, response;
    let {
      name,
      email,
      telephone,
      address,
      installation_date,
      property_type,
      roof_slope,
      roof_type,
      roof_direction,
      gutter_height,
      roof_width,
      roof_length,
      fuse_size,
      energy_consumption,
    } = event.target;

    try {
      quoteParams = {
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        address: address.value,
        installation_date: installation_date.value,
        property_type: property_type.value,
        roof_slope: roof_slope.value,
        roof_type: roof_type.value,
        roof_direction: roof_direction.value,
        gutter_height: gutter_height.value,
        roof_width: roof_width.value,
        roof_length: roof_length.value,
        fuse_size: fuse_size.value,
        energy_consumption: energy_consumption.value,
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
    <div id="quotesPage">
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
              <NameQuestion />

              {values.name && values.name !== "false" && (
                <>
                  <label>Thanks {values.name}, and your email address?</label>{" "}
                  <br />
                  <EmailQuestion />
                  {({ input }) => {
                    return (
                      <>
                        {" "}
                        <input {...input} />
                      </>
                    );
                  }}
                </>
              )}
              {values.email &&
                values.email.includes("@") &&
                values.email.includes(".") && (
                  <>
                    <label>
                      Great, and the best number to contact you on?
                          </label>
                    <TelephoneQuestion />
                    {({ input }) => {
                      return (
                        <>
                          {values.email &&
                            values.email.includes("@") &&
                            values.email.includes(".") && <input {...input} />}
                        </>
                      );
                    }}
                  </>
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
                  {({ input }) => {
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
                            <button type="submit">Submit</button>
                            <PropertyType />
                            <InstallationDate />
                            <RoofSlope />
                            <RoofType />
                            <RoofDirection />
                            <RoofDimensions />
                            <Electricity />
                          </>
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
      {message && <p data-cy="message">{message}</p>}
    </div>
  );
};

export default QuotesPage;
