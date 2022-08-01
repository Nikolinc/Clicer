import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MilkWawes from "../milk_waves/waves";
import "./StyleClicer.scss";

export default function CookiesClicer() {
  const [count, setCount] = useState(0);

  return (
    <div className="oblastClicer" id="objact">
      <div id="cookies" className="title">
        печенья: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        <img
          src="https://pngimg.com/uploads/cookie/small/cookie_PNG13701.png"
          alt=""
          draggable="false"
        />
      </button>
      <MilkWawes />
    </div>
  );
}
