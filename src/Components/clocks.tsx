//clocks
import React, { useState, useEffect } from "react";
import "./clocks.css";
import ClockNumbers from "./ClockNumbers";
import moment from "moment-timezone";
import TimezoneDropdown from "./TimezoneDropdown";
import { ClockTime, getCurrentTimeInTimezone } from "./ClockTime"; // Import the ClockTime object

interface ClockProps {
  type: "analog" | "digital";
  initialTimezone?: string;
}

const Clock: React.FC<ClockProps> = ({ type, initialTimezone = "UTC" }) => {
  const [time, setTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [clockTime, setClockTime] = useState<ClockTime>(
    getCurrentTimeInTimezone(initialTimezone)
  );

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockTime(getCurrentTimeInTimezone(clockTime.timezone));
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [clockTime.timezone, selectedTimezone]);

  const handleTimezoneChange = (timezone: string) => {
    console.log("Selected timezone:", timezone);
    setSelectedTimezone(timezone);
    const currentTime = moment().tz(timezone); // Get current time in selected timezone
    console.log("New time:", currentTime.toDate());
    setTime(currentTime.toDate());
    setClockTime(getCurrentTimeInTimezone(timezone));
    setSelectedTimezone(timezone);
  };

  const formattedDate = new Date("2019-02-19T06:00:00Z").toLocaleDateString(
    "en-gb",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

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

  const numbers = [...Array(12)].map((_, index) => index + 1);

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
