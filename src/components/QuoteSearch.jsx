import React, { useEffect, useState } from "react";
import QuoteSearchBox from "./QuoteSearchBox";
import QuoteSummary from "./QuoteSummary";
import axios from "axios";

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
  const filteredQuotes = quotes.filter((quote) =>
    quote.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <QuoteSearchBox handleChange={handleChange} />
      {filteredQuotes.map((quote) => (
        <QuoteSummary
          key={quote.id}
          name={quote.name}
          email={quote.email}
          telephone={quote.telephone}
          address={quote.address}
        />
      ))}
    </>
  );
};

export default QuoteSearch;