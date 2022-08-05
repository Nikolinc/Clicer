import React, { useState } from "react";
import "./productStyle.scss";
import { Cursor, Grandma } from "../../../features/product/productObjact";

export default function Product() {
  const [countCursor, setCountCursor] = useState(0);
  const ProductArray = [Cursor,Grandma];
  return (
    <>
      {ProductArray.map((prod) => (
        <div
          className={`product ${prod.name}`}
          onClick={() => {
            prod.buyProduct;
            setCountCursor(prod.count);
          }}
        >
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
