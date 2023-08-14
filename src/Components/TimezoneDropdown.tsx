// TimezoneDropdown.tsx
import React from "react";
import Select from "react-select";
import moment from "moment-timezone";
import "./TimezoneDropdown.css";

interface TimezoneDropdownProps {
  selectedTimezone: string;
  onSelectTimezone: (timezone: string) => void;
}

const TimezoneDropdown: React.FC<TimezoneDropdownProps> = ({
  selectedTimezone,
  onSelectTimezone,
}) => {
  const timezones = moment.tz
    .names()
    .map((tz: string) => ({ value: tz, label: tz }));

  // Add custom class to the dropdown
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "8px",
      borderColor: "#ccc",
      boxShadow: "none",
    }),
    // Add more custom styles as needed
  };

  console.log("Timezones:", timezones);

  return (
    <div className="dropdownMenu">
      <Select
        options={timezones}
        value={{ value: selectedTimezone, label: selectedTimezone }}
        onChange={(selectedOption) =>
          onSelectTimezone(selectedOption?.value || "UTC")
        }
        styles={customStyles} // Apply custom styles
        classNamePrefix="TimezoneDropdown"
        // classNamePrefix="custom-select"
      />
    </div>
  );
};

export default TimezoneDropdown;
