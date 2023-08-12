import React, { Component } from "react";
import AnalogClock from "./AnalogClock"; // Import the AnalogClock component
import DigitalClock from "./DigitalClock"; // Import the DigitalClock component
import Settings from "./Settings";

class ClockDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockType: "analog", // Default to analog clock
      showClock: true, // Initially, the clock is shown
    };
  }

  handleClockTypeChange = (event) => {
    this.setState({ clockType: event.target.value });
  };

  handleRemoveClock = () => {
    this.setState({ showClock: false });
    this.props.onRemoveClock(); // Notify parent component about clock removal
  };

  render() {
    const { clockType, showClock } = this.state;

    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              value="analog"
              checked={clockType === "analog"}
              onChange={this.handleClockTypeChange}
              disabled={!showClock} // Disable if no clock is displayed
            />
            Analog Clock
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="digital"
              checked={clockType === "digital"}
              onChange={this.handleClockTypeChange}
              disabled={!showClock} // Disable if no clock is displayed
            />
            Digital Clock
          </label>
        </div>
        <div>
          <button onClick={this.handleRemoveClock} disabled={!showClock}>
            Remove Clock
          </button>
        </div>
        {showClock && (
          <div className="clock-display">
            {clockType === "analog" ? <AnalogClock /> : <DigitalClock />}
          </div>
        )}
      </div>
    );
  }
}
export default ClockDisplay;

//this is where you would house the digital and analog clocks, the ClockDisplay component is intorduced to
//the settings.tsx which holds the function that gives the option to add a new clock. Each time the user adds
//a new clock to the server, they have the option to use radio buttons to switch between
//an analog display or a digital display
