import React, { Component, ReactNode } from "react";
import ClockDisplay from "./ClockDisplay"; // Import the ClockDisplay component
import "./Setting.css";

interface SettingsState {
  clocks: ReactNode[];
}

class Settings extends Component<{}, SettingsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clocks: [
        <ClockDisplay
          key={0}
          onRemoveClock={() => this.handleRemoveClock(0)}
        />,
      ], // Start with one clock
    };
  }

  handleAddClock = () => {
    const { clocks } = this.state;
    const newClocks = [
      ...clocks,
      <ClockDisplay
        key={clocks.length}
        onRemoveClock={() => this.handleRemoveClock(clocks.length)}
      />,
    ];
    this.setState({ clocks: newClocks });
  };

  handleRemoveClock = (index: number) => {
    const { clocks } = this.state;
    const newClocks = [...clocks];
    newClocks.splice(index, 1);
    this.setState({ clocks: newClocks });
  };

  render() {
    const { clocks } = this.state;

    return (
      <div>
        <button className="addClock" onClick={this.handleAddClock}>
          Add New Clock
        </button>
        <div>
          {clocks.map((clock, index) => (
            <div key={index} className="clock-wrapper">
              {clock}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Settings;
