import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./StyleClicer.scss";

export default function CookiesClicer() {
  const [count, setCount] = useState(0);

  return (
    <div className="oblastClicer">
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
    </div>
  );
}
