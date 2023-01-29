import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import History from "./components/History";
import HistoryDetail from "./components/HistoryDetail";
import Operations from "./components/Operations";
import Toggle from "./components/Toggle";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isNumberInput, setIsNumberInput] = useState(false);
  const [operationArray, setOperationArray] = useState([""]);
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);
  const [historyDisplay, setHistoryDisplay] = useState(true);

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
      <History
        isDark={isDark}
        setHistoryDisplay={setHistoryDisplay}
        historyDisplay={historyDisplay}
      />
      <HistoryDetail
        history={history}
        isDark={isDark}
        historyDisplay={historyDisplay}
      />
      <Operations
        isDark={isDark}
        operationArray={operationArray}
        setOperationArray={setOperationArray}
        number={number}
        result={result}
      />
      <Buttons
        isDark={isDark}
        isNumberInput={isNumberInput}
        setIsNumberInput={setIsNumberInput}
        operationArray={operationArray}
        setOperationArray={setOperationArray}
        number={number}
        setNumber={setNumber}
        setResult={setResult}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
}

export default App;
