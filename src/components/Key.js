import React from "react";
import "./Key.css";

const Key = ({ data, performCalculation }) => {
  const handleClick = () => {
    performCalculation(data.value);
    console.log(data.value) //to test whether I have passed down the data prop properly.
  }

  return (
    <>
      <div style={{ backgroundColor: data.color, cursor: "pointer", borderRadius: "10px", margin: "10px" }} className="keyDiv">
        <button onClick={handleClick} //could have either done onClick = {() => performCalculation(data.value)} or what I have done here. I used the function at the top to allow me to easily see my code as I also wanted to console.log it.
          style={{ border: "6px groove #ecaacb", backgroundColor: "transparent", width: "100%", borderRadius: "10px" }}>
          <h2 style={{ textAlign: "center", color: "black" }}>{data.value}</h2>
        </button>
      </div>
    </>
  )
}

export default Key;