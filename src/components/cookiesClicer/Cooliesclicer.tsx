import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CookieShower from "./cookieShower/cookieShower";
import MilkWawes from "./milk_waves/waves";
import "./StyleClicer.scss";

export default function CookiesClicer() {
  const [count, setCount] = useState(0);
  const bakeryName = "Cookie Zigul";
  const height = (window.screen.height - 80) / window.devicePixelRatio - 20;
  return (
    <div
      className="oblastClicer"
      id="VerticalBorder"
      style={{ height: height }}
    >
      <CookieShower />
      <div id="bakeryName" className="title">
        Пекарня {bakeryName}
      </div>
      <div id="cookies" className="title">
        печенья: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        <img
          src="https://orteil.dashnet.org/cookieclicker/img/perfectCookie.png"
          alt=""
          draggable="false"
        />
      </button>
      <MilkWawes />
    </div>
  );
}
