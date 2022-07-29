import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CookiesClicer from "../components/cookiesClicer/Cooliesclicer";
import "./app.scss";

function App() {
  return (
    <div className="container">
      <div className="objectClicer">
        <CookiesClicer />
      </div>
    </div>
  );
}

export default App;
