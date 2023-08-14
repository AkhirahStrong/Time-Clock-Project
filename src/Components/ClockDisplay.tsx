import React, { Component } from "react";
import AnalogClock from "./AnalogClock"; // Import the AnalogClock component
import DigitalClock from "./DigitalClock"; // Import the DigitalClock component
import Settings from "./Settings";
import "./ClockDisplay.css";

interface ClockDisplayProps {
  onRemoveClock: () => void;
}

// Define the ClockDisplayProps interface
interface ClockDisplayState {
  clockType: "analog" | "digital"; // Define the type for clockType
  showClock: boolean;
}

// class ClockDisplay extends Component {
class ClockDisplay extends Component<ClockDisplayProps, ClockDisplayState> {
  constructor(props: any) {
    super(props);
    this.state = {
      clockType: "analog", // Default to analog clock
      showClock: true, // Initially, the clock is shown
    };
  }

  handleClockTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ clockType: event.target.value as "analog" | "digital" });
  };

  handleRemoveClock = () => {
    this.setState({ showClock: false });
    this.props.onRemoveClock();
  };

  // handleClockTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ clockType: event.target.value });
  // };

  render() {
    const { clockType, showClock } = this.state;

    return (
      <div>
        <div className="radioGroup">
          <div>
            <label className="time-label">
              <input
                className="radioSelection"
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
            <label className="time-label">
              <input
                className="radioSelection"
                type="radio"
                value="digital"
                checked={clockType === "digital"}
                onChange={this.handleClockTypeChange}
                disabled={!showClock} // Disable if no clock is displayed
              />
              Digital Clock
            </label>
          </div>
        </div>
        <div>
          <button
            className="removeButton"
            onClick={this.handleRemoveClock}
            disabled={!showClock}
          >
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
