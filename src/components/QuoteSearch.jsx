import React, { useEffect, useState } from "react";
import QuoteSearchBox from "./QuoteSearchBox";
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

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.telephone.includes(search) ||
      quote.name.toLowerCase().includes(search.toLowerCase()) ||
      quote.email.toLowerCase().includes(search.toLowerCase()) ||
      quote.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h4>Search by...</h4>
      <QuoteSearchBox handleChange={handleChange} />
      {filteredQuotes.map((quote) => (
        <>
          <div id={`quote-${quote.id}`} data-id={quote.id}>
            <p>{quote.name}</p>
            <p>{quote.email}</p>
            <p>{quote.telephone}</p>
            <p>{quote.address}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default QuoteSearch;