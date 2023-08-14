//Time object
import moment from "moment-timezone";
import { ReactNode } from "react";

interface ClockTime {
  formattedTime: ReactNode;
  currentTime: Date;
  timezone: string;
}

const getCurrentTimeInTimezone = (timezone: string): ClockTime => {
  const currentTime = moment().tz(timezone).toDate();
  const formattedTime = currentTime.toLocaleTimeString();
  return { currentTime, timezone, formattedTime };
};

export { getCurrentTimeInTimezone };
export type { ClockTime };
