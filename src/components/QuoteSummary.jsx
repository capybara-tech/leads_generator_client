import React from "react";
import { Card } from "semantic-ui-react"

const QuoteSummary = ({ name, email, telephone, address }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <p>{name}</p>
          <p>{email}</p>
          <p>{telephone}</p>
          <p>{address}</p>
        </Card.Content>
      </Card>
    </>
  );
};
export default QuoteSummary;