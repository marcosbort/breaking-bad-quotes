import React from "react";

const Quote = ({ quoteJs }) => {
  return (
    <p>
      {quoteJs.text} <br />
      <span> {quoteJs.author} </span>
    </p>
  );
};

export default Quote;

/* 
Recibe quoteJs por props de su componente padre (App)
<Quote quoteJs={quoteApp} />
*/
