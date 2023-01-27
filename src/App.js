import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import History from "./components/History";
import Operations from "./components/Operations";
import Toggle from "./components/Toggle";

function App() {
  const [isDark, setIsDark] = useState(false);

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
      <Operations isDark={isDark} />
      <Buttons isDark={isDark} />
    </div>
  );
}

export default App;
