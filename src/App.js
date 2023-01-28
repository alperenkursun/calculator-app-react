import { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import History from "./components/History";
import Operations from "./components/Operations";
import Toggle from "./components/Toggle";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [operationsInterface, setOperationsInterface] = useState("");
  const [isNumberInput, setIsNumberInput] = useState(false);
  const [isOperation, setIsOperation] = useState(false);
  const [operationArray, setOperationArray] = useState([""]);
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log(operationArray, "Operation Array");
  }, [operationArray]);

  // let array = [
  //   { value: 5000, isNegative: false },
  //   { value: "+", isNegative: false },
  //   { value: -5000, isNegative: true },
  //   { value: "-", isNegative: false },
  //   { value: -5000, isNegative: true },
  // ];

  // console.log(array, "array");

  return (
    <div
      className="calculator"
      style={{
        background: isDark
          ? "linear-gradient(166.34deg, #373737 0%, #252628 22.9%, #000309 100%)"
          : "linear-gradient(166.34deg,#fefefe 0%,#f9f9f9 12.84%,#f3f3f3 32.53%,#e5e5e5 100%)",
      }}
    >
      <Toggle isDark={isDark} setIsDark={setIsDark} />
      <History isDark={isDark} />
      <Operations
        isDark={isDark}
        operationArray={operationArray}
        setOperationArray={setOperationArray}
        number={number}
        result={result}
      />
      <Buttons
        isDark={isDark}
        operationsInterface={operationsInterface}
        setOperationsInterface={setOperationsInterface}
        isNumberInput={isNumberInput}
        setIsNumberInput={setIsNumberInput}
        isOperation={isOperation}
        setIsOperation={setIsOperation}
        operationArray={operationArray}
        setOperationArray={setOperationArray}
        number={number}
        setNumber={setNumber}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
