import React, { useState } from "react";
import "./productStyle.scss";
import { Cursor } from "../../../features/product/productObjact";

export default function Product() {
  //const [countCursor, setCountCursor] = useState(0);
  const ProductArray = [Cursor];
  return (
    <>
      {ProductArray.map((prod) => (
        <div className={`product ${prod.name}`}>
          <div
            className="icon"
            style={{
              backgroundPositionX: `${prod.imagePositionX}` + "px",
              backgroundPositionY: `${prod.imagePositionY}` + "px",
            }}
          ></div>
          <div className="info">
            <div className="name">{prod.name}</div>
            <div className="price">{prod.Price}</div>
          </div>

          <div className="count">{prod.count}</div>
        </div>
      ))}
    </>
  );
}
