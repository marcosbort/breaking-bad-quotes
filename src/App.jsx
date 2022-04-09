import React, { useState, useEffect, useCallback } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const updateQuote = useCallback(async () => {
    setLoading(true);

    const res = await fetch("https://breakingbadapi.com/api/quote/random");
    const [newQuote] = await res.json();
    const { quote, author } = newQuote;

    setQuote({
      quote,
      author,
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="app">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="logo" />
      <button onClick={() => updateQuote()}> Ger Another </button>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <p className="text"> {quote.quote} </p>
          <p className="author"> {quote.author} </p>
        </div>
      )}
    </div>
  );
}

export default App;
