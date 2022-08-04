import React from "react";
import Position from "./position/position";
import "./StyleShop.scss";

export default function Shop() {
  return (
    <div className="shop" id="VerticalBorder">
      <div className="titleShop">Store</div>
      <div id="HorizontalBorder" className="storeSection upgradeBox">
        <Position />
      </div>
    </div>
  );
}
