import React, { useEffect, useState } from "react";
import NameQuestion from "./mandatoryQuestions/NameQuestion";
import EmailQuestion from "./mandatoryQuestions/EmailQuestion";
import TelephoneQuestion from "./mandatoryQuestions/TelephoneQuestion";
import AddressQuestion from "./mandatoryQuestions/AddressQuestion";
import MessagePage from "./mandatoryQuestions/MessagePage";
import axios from "axios";
import { Form } from "react-final-form";

const QuotesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let responseMessage, quoteParams, response;
    let {
      name,
      email,
      telephone,
      location,
      latitude,
      longitude,
      installation_date = "",
      property_type = "",
      roof_slope = "",
      roof_type = "",
      roof_direction = "",
      gutter_height = "",
      roof_width = "",
      roof_length = "",
      fuse_size = "",
      energy_consumption = "",
    } = event.target;

    try {
      quoteParams = {
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        location: location.value,
        latitude: latitude.value,
        longitude: longitude.value,
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

      response = await axios.post("/quotes", {
        quote: quoteParams,
      });

      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = "Somthing went wrong, please try again";
    } finally {
      setMessage(responseMessage);
    }
  };

  return (
    <div id="quotesPage">
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
                <>
                  <AddressQuestion />

                  {({ input }) => {
                    return (
                      <>
                        {values.telephone && values.telephone !== "false" && (
                          <input {...input} />
                        )}
                      </>
                    );
                  }}
                </>
              )}
            </form>
          );
        }}
      />
      <MessagePage 
      message={message}
      />
    </div>
  );
};

export default QuotesPage;