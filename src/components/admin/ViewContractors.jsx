import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const ContractorPage = () => {
  const [contractors, setContractors] = useState([]);

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
        <Card>
          <Card.Content>
            <Card.Header data-cy="name">{contractor.name}</Card.Header>
            <Card.Meta data-cy="telephone">{contractor.telephone}</Card.Meta>
            <Card.Meta data-cy="email">{contractor.email}</Card.Meta>
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