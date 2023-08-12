import React from "react";
import Clock from "./components/clocks";
import ClockDisplay from "./components/ClockDisplay";
import Settings from "./components/Settings";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>World Clock App</h1>
      <Settings></Settings>
    </div>
  );
};

export default App;
