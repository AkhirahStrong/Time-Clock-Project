import React, { useState, useEffect } from "react";
import "./clocks.css";

interface ClockProps {
  type: "analog" | "digital";
}

const Clock: React.FC<ClockProps> = ({ type }) => {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  if (type === "digital") {
    const formattedTime = time.toLocaleTimeString();
    return (
      <div>
        <p>{formattedTime}</p>
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
    <div className="clock">
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
  );
};

export default Clock;

//this is where the clocks themselves, analog and digital, have been created
