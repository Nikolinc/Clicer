import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Area from "../components/Area/Area";
import CookiesClicer from "../components/CookiesClicer/Cooliesclicer";
import Shop from "../components/Shop/shop";
import "./app.scss";

function App() {
  return (
    <div className="container">
      <CookiesClicer />       
      <Area />
      <Shop/>
    </div>
  );
}

export default App;
