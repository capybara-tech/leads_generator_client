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
      contact_person,
      address,
      telephone,
      email,
      company_number,
    } = event.target;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      contractorParams = {
        name: name.value,
        contact_person: contact_person.value,
        address: address.value,
        telephone: telephone.value,
        email: email.value,
        company_number: company_number.value,
      };

      response = await axios.post(
        "/admin/contractors",
        { contractor: contractorParams },
        { headers: headers }
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
      <h2>Create a new contractor</h2>
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
            name="contact_person"
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
            name="company_number"
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