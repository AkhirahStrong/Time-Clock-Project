import React, { Component } from "react";
import ClockDisplay from "./ClockDisplay";

class Settings extends Component {
  constructor(props) {
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

  handleRemoveClock = (index) => {
    const { clocks } = this.state;
    const newClocks = [...clocks];
    newClocks.splice(index, 1);
    this.setState({ clocks: newClocks });
  };

  render() {
    const { clocks } = this.state;

    return (
      <div>
        <button onClick={this.handleAddClock}>Add New Clock</button>
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
