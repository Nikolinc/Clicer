import { util } from "prettier";
import React from "react";
import "./StylePosition.scss";
import { position } from "../../../Data/news";

export default function Position() {
  console.log(position);
  return position.map((pos) => (
    <>
      <div className={`position ${pos.id.toString()}`} key={pos.id}>
        <div
          className={`  image ${pos.id.toString()}`}
          style={{
            backgroundPositionX: `${pos.x}` + "px",
            backgroundPositionY: `${pos.y}` + "px",
          }}
          key={pos.id}
        ></div>
      </div>
    </>
  ));
}
