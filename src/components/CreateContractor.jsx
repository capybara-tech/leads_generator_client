import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "semantic-ui-react";

const CreateContractor = () => {
  const [message, setMessage] = useState("");

  const submitContractor = async (event) => {
    event.preventDefault();
    let responseMessage, contractorParams, response;
    let {
      name,
      contact,
      address,
      telephone,
      email,
      companyNumber,
    } = event.target;

    try {
      contractorParams = {
        name: name.value,
        contact: contact.value,
        address: address.value,
        telephone: telephone.value,
        email: email.value,
        companyNumber: companyNumber.value,
      };

      response = await axios.post(
        "http://localhost:3000/api/v1/admin/contractors",
        { contractor: contractorParams },
        { headers: { "Content-Type": "application/json" } }
      );
      
      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = error.response.data.errors;
    } finally {
      setMessage(responseMessage);
    }
  };

  return (
    <>
      <h4>Create a new contractor</h4>
      <Form data-cy="contractor-form" onSubmit={submitContractor}>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            placeholder="Company name"
            data-cy="name"
            name="name"
            label="Company name"
          />
          <Form.Field
            control={Input}
            placeholder="Contact person"
            data-cy="contact-person"
            name="contact"
            label="Contact person"
          />
          <Form.Field
            control={Input}
            placeholder="Address"
            data-cy="address"
            name="address"
            label="Address"
          />
          <Form.Field
            control={Input}
            placeholder="Telephone"
            data-cy="telephone"
            name="telephone"
            label="Telephone"
          />
          <Form.Field
            control={Input}
            placeholder="Email"
            data-cy="email"
            name="email"
            label="Email"
          />
          <Form.Field
            control={Input}
            placeholder="Company number"
            data-cy="company-number"
            name="companyNumber"
            label="Company number"
          />
        </Form.Group>
        <Button data-cy="button" type="submit">
          Save Contractor
        </Button>
      </Form>
      {message && <p data-cy="message">{message}</p>}
    </>
  );
};

export default CreateContractor;