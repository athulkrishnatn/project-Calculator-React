import React, { useState } from 'react';

const App = () => {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);

  const appendNumber = (number) => {
    setCurrentOperand((prev) => prev + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const compute = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentOperand(result.toString());
    setOperation(null);
    setPreviousOperand("");
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
  };

  const deleteLast = () => {
    setCurrentOperand((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
        <div className="mb-4 p-4 text-right text-2xl font-semibold bg-gray-200 rounded-lg">
          <div className="text-gray-500">{previousOperand} {operation}</div>
          <div className="text-black">{currentOperand || "0"}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clear} className="col-span-2 bg-red-500 text-white p-4 rounded-lg font-bold hover:bg-red-600">AC</button>
          <button onClick={deleteLast} className="bg-gray-300 p-4 rounded-lg font-bold hover:bg-gray-400">DEL</button>
          <button onClick={() => chooseOperation("/")} className="bg-gray-300 p-4 rounded-lg font-bold hover:bg-gray-400">/</button>

          {[1, 2, 3].map(num => (
            <button key={num} onClick={() => appendNumber(num.toString())} className="bg-gray-200 p-4 rounded-lg font-semibold hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => chooseOperation("*")} className="bg-gray-300 p-4 rounded-lg font-bold hover:bg-gray-400">*</button>

          {[4, 5, 6].map(num => (
            <button key={num} onClick={() => appendNumber(num.toString())} className="bg-gray-200 p-4 rounded-lg font-semibold hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => chooseOperation("+")} className="bg-gray-300 p-4 rounded-lg font-bold hover:bg-gray-400">+</button>

          {[7, 8, 9].map(num => (
            <button key={num} onClick={() => appendNumber(num.toString())} className="bg-gray-200 p-4 rounded-lg font-semibold hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => chooseOperation("-")} className="bg-gray-300 p-4 rounded-lg font-bold hover:bg-gray-400">-</button>

          <button onClick={() => appendNumber(".")} className="bg-gray-200 p-4 rounded-lg font-semibold hover:bg-gray-300">.</button>
          <button onClick={() => appendNumber("0")} className="bg-gray-200 p-4 rounded-lg font-semibold hover:bg-gray-300">0</button>
          <button onClick={compute} className="col-span-2 bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
