//clocks
import React, { useState, useEffect } from "react";
import "./clocks.css";
import ClockNumbers from "./ClockNumbers";
import moment from "moment-timezone";
import TimezoneDropdown from "./TimezoneDropdown";
// import { ClockTime, getCurrentTimeInTimezone } from "./ClockTime";

interface ClockProps {
  type: "analog" | "digital";
  initialTimezone?: string;
}

const Clock: React.FC<ClockProps> = ({ type, initialTimezone = "UTC" }) => {
  const [time, setTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");

  const getCurrentTime = () => {
    return moment(new Date())
      .tz(selectedTimezone)
      .format("YYYY-MM-DD HH:mm:ss");
  };

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(getCurrentTime()));
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  const handleTimezoneChange = (timezone: string) => {
    console.log("Selected timezone:", timezone);
    setSelectedTimezone(timezone);
    // convert to new date using moment formatted string (this breaks locality)
    setTime(new Date(getCurrentTime()));
  };

  if (type === "digital") {
    const formattedTime = time.toLocaleTimeString();
    return (
      <div>
        <p className="digitalTimeDisplay">{formattedTime}</p>
        <div className="timeDropdown">
          <TimezoneDropdown
            selectedTimezone={selectedTimezone}
            onSelectTimezone={handleTimezoneChange}
          />
        </div>
      </div>
    );
  }

  // Calculate rotation angles for analog clock hands
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (360 / 12) * (hours + minutes / 60) + 90; // Add 90-degree rotation
  const minuteDeg = (360 / 60) * minutes + 90; // Add 90-degree rotation
  const secondDeg = (360 / 60) * seconds + 90; // Add 90-degree rotation

  return (
    <div>
      <div className="timeDropdown">
        <TimezoneDropdown
          selectedTimezone={selectedTimezone}
          onSelectTimezone={handleTimezoneChange}
        />
      </div>
      <div className="clock">
        <ClockNumbers count={12} />

        <div className="hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
        <div
          className="minute"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        />
        <div
          className="second"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        />
        <div className="center-dot" />
      </div>
    </div>
  );
};

export default Clock;

//this is where the clocks themselves, analog and digital, have been created
