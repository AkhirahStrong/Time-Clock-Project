import React from "react";
import "./App.css";
import Clock from "./Components/clocks";
import ClockDisplay from "./Components/ClockDisplay";
import Settings from "./Components/Settings";

function App() {
  return (
    <div className="App">
      <h1>World Clock</h1>
      <Settings></Settings>
    </div>
  );
}

export default App;
