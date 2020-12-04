import React, { useEffect, useState } from "react";
import QuoteSearchBox from "./QuoteSearchBox";
import axios from "axios";
import { Segment } from "semantic-ui-react";

const QuoteSearch = () => {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let response = await axios.get("/admin/quotes", {
      headers: headers,
    });
    setQuotes(response.data.quotes);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredQuotes = quotes.filter(
    (quote) =>
      quote.telephone.includes(search) ||
      quote.name.toLowerCase().includes(search.toLowerCase()) ||
      quote.email.toLowerCase().includes(search.toLowerCase()) ||
      quote.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <h4>Search by...</h4>
        <QuoteSearchBox handleChange={handleChange} />
        {filteredQuotes.map((quote) => (
          <>
            <Segment verticle textAlign="center">
              <div id={`quote-${quote.id}`} data-id={quote.id}>
                <h4 data-cy="name">{quote.name}</h4>
                <p data-cy="email">{quote.email}</p>
                <p data-cy="telephone">{quote.telephone}</p>
                <p data-cy="address">{quote.location}</p>
              </div>
            </Segment>
          </>
        ))}
      </div>
    </>
  );
};

export default QuoteSearch;
