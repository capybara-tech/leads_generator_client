import React from "react";
import { Form, Input, Button } from "semantic-ui-react";

const CreateContractor = () => {
  return (
    <>
    <h4>Create a new contractor</h4>
      <Form data-cy="contractor-form">
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
            name="company number"
            label="Company number"
          />
        </Form.Group>
        <Button data-cy="button" type="submit">
          Save Contractor
        </Button>
      </Form>
    </>
  );
};

export default CreateContractor;