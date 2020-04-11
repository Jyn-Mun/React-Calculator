import React, { useState } from "react";
import "./CalculatorDisplay.css";

const CalculatorDisplay = ({ data }) => {
  return (
    <div className="calcDisplayDiv">
      <h1 style={{ fontWeight: "bold" }}>{data ? data : 0}</h1>
    </div>
  )
}

export default CalculatorDisplay