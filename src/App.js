import React, { useState, useEffect, useCallback } from "react";
import Quote from "./componentes/Quote";
import Spinner from "./componentes/Spinner";

function App() {
  const initialQuoteApp = {
    text: "",
    author: "",
  };

  const [quoteApp, setQuoteApp] = useState(initialQuoteApp);
  const [loading, setLoading] = useState(false);

  /* función asícrona para el useEffect() */
  const updateQuoteApp = useCallback(async () => {
    setLoading(true); // Snniper start

    const url = "https://breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuoteApp] = await res.json();

    setQuoteApp({
      text: newQuoteApp.quote,
      author: newQuoteApp.author,
    });

    setLoading(false); // Snniper end
  }, []);

  useEffect(() => {
    updateQuoteApp();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => updateQuoteApp()}>Get Another</button>
      {loading ? <Spinner /> : <Quote quoteJs={quoteApp} />}
    </div>
  );
}

export default App;

/*  Análisis:
<Quote quoteJs={quoteApp} />

El componente Quote:
Recibe quoteApp (de useState quoteApp/setQuoteApp - en App.js)
Envía quoteJs (a props en Quote.js)

*/

/* Notas:

// Desestructuramos newQuoteApp (viene del end-point)
const { quote: text, author } = newQuoteApp

setQuoteApp({
  text,
  author
})
*/
