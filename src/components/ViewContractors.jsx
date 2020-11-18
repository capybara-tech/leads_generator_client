import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "semantic-ui-react";

const ContractorPage = (props) => {
  const [contractors, setContractors] = useState([]);
  const [viewSingleContractor, setViewSingleContractor] = useState(false);

  useEffect(() => {
    getContractors();
  }, []);

  const getContractors = async () => {
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let response = await axios.get("/admin/contractors", {
      headers: headers,
    });
    setContractors(response.data.contractors);
  };

  let content = contractors.map((contractor) => (
    <div data-cy={`contractor-${contractor.id}`} data-id={contractor.id}>
      <div>
        <Button primary id="view-single-contractor" onClick={setViewSingleContractor}>
          Show more
        </Button>
        <Card>
          <Card.Content>
            <Card.Header data-cy="name">{contractor.name}</Card.Header>
            <Card.Meta data-cy="telephone">{contractor.telephone}</Card.Meta>
            <Card.Meta data-cy="email">{contractor.email}</Card.Meta>
          </Card.Content>
          <Card.Content>
            {viewSingleContractor &&
              <>
                <Card.Header data-cy="contact-person">{contractor.contact_person}</Card.Header>
                <Card.Meta data-cy="address">{contractor.address}</Card.Meta>
                <Card.Meta data-cy="company_number">{contractor.company_number}</Card.Meta>
              </>
            }
          </Card.Content>
        </Card>
        <br />
      </div>
    </div>
  ));

  return (
    <div id="contractor-page">
      <h2>Contractor list</h2>
      <div>{content}</div>
    </div>
  );
};

export default ContractorPage;