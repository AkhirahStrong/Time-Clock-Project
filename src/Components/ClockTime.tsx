//Time object
import moment from "moment-timezone";

interface ClockTime {
  currentTime: Date;
  timezone: string;
}

const getCurrentTimeInTimezone = (timezone: string): ClockTime => {
  const currentTime = moment().tz(timezone).toDate();
  return { currentTime, timezone };
};

export { getCurrentTimeInTimezone };
export type { ClockTime };
