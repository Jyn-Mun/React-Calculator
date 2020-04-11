import React from "react";
import "./KeyPad.css";
import Key from "./Key";
import useKeys from "../utils/useKeys";

const KeyPad = ({ performCalculation }) => {
  const keys = useKeys();
  return (
    <div className="keyWrapper">
      {keys.map((key) => {
        return (
          <Key className="key" data={key} performCalculation={performCalculation} data={key} />
        )
      })}
    </div>
  )
}

export default KeyPad;