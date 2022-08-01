import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Area from "../components/Area/Area";
import CookiesClicer from "../components/cookiesClicer/Cooliesclicer";
import "./app.scss";

function App() {
  return (
    <div className="container">
      <CookiesClicer />       
      <Area />
    </div>
  );
}

export default App;
