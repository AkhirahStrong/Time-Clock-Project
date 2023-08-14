import moment from "moment-timezone";

const getTimezones = () => {
  return moment.tz.names().map((tz) => ({ value: tz, label: tz }));
};

export default getTimezones;
