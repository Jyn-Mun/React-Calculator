import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CalculatorDisplay from "./components/CalculatorDisplay";
import KeyPad from "./components/KeyPad";

function App() {
  const [result, setResult] = useState("");
  const calculate = () => {
    try {
      setResult((eval(result) || "") + "")  //|| means or, javascript returns the left operand first and if not, it will return the right and the classic format for eval is const something = eval("x+y") + "
    }
    catch (e) {
      setResult("e")
    }
  };
  const reset = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1)); //(x,y) x defines where to start selecting from an array and y defines where to end the selection. use negative numbers to select from the end of an array, so essentially this selection starts from the first integer and ends at the last-1 integer, hence following the functionality of a backspace button.
  };
  const performCalculation = key => {
    if (key === "=") {
      calculate();
    }
    else if (key === "AC") {
      reset();
    }
    else if (key === "C") {
      backspace();
    }
    else {
      setResult(result + key);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="calculatorHeading">
          <span>C</span>
          <span>a</span>
          <span>l</span>
          <span>c</span>
          <span>u</span>
          <span>l</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
        </h1>
        <h4 className="calculatorSubheading">This Calculator is made using ReactJs, CSS5 and animated with @keyframes</h4>
        <CalculatorDisplay data={result} />
        <KeyPad performCalculation={performCalculation} />
      </div>
      <h6 className="footer">coded with <span>&hearts;</span> by <a href="https://www.linkedin.com/in/jyn-mun-ng-7616891a5/" className="footerPlug">jyn-mun ng</a></h6>
    </>
  );
}

export default App;
