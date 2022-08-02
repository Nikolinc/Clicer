import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { news } from "../../Data/news";
import "./styleArea.scss";

export default function Area() {
  return (
    <div className="Area" id="VerticalBorder">
      <div className="header" id="HorizontalBorder">
        <div className="Menu" id="leftMenu">
          <button className="setting">setting</button>
          <button className="statistic">statistic</button>
        </div>
        <div className="news">{news[getRandomInt(4)]}</div>
        <div className="Menu" id="rightMenu">
          <button className="information">information</button>
          <button className="experience">experience</button>
        </div>
      </div>
    </div>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
