import { DateTime } from "luxon";
import { dateFormat } from "../constants";

export const formatDate = (date: string) => {
  return DateTime.fromISO(date).toFormat(dateFormat);
};
