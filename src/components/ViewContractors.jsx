import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <p data-cy="name">{contractor.name}</p>
        <p data-cy="telephone">{contractor.telephone}</p>
        <p data-cy="email">{contractor.email}</p>
      </div>
    </div>
  ));

  return (
    <div id="contractor-page">
      <h1>Contractor list</h1>
      <div>{content}</div>
    </div>
  );
};

export default ContractorPage;