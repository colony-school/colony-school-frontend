// Modules
import { addMinutes, differenceInDays } from "date-fns";
import format from "date-fns/format";

/**
 * Converts a month number into a 3 letter abbreviation for that month
 *
 * e.g. 2 -> FEB
 * @param month Month number
 * @returns 3 letter month
 */
export function to3LetterMonth(month: number): string {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return months[month];
}

/**
 * Converts a day number into a human-readable day
 *
 * e.g. 2 -> FEB
 * @param month Month number
 * @returns 3 letter month
 */
export function weekToString(week: number): string {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weeks[week];
}

/**
 * Handles date interval, shows the date only once if the date is the same
 *
 * ---
 *
 * Choose `endDate` or `duration`
 * @param startDate The date before
 * @param endDate The date after
 * @param duration The duration after the start date until the end in minutes
 */
export function formatDate(startDate: Date, duration: number): string;
export function formatDate(startDate: Date, endDate: Date): string;
export function formatDate(
  startDate: Date,
  endDateOrDuration: number | Date
): string | void {
  // If duration is inputted
  if (typeof endDateOrDuration === "number") {
    return `${format(startDate, "dd/MM/yyyy")}–${format(
      addMinutes(startDate, endDateOrDuration),
      "dd/MM/yyyy"
    )}`;
  }

  // If end date is inputted
  else if (endDateOrDuration instanceof Date) {
    if (differenceInDays(startDate || 0, endDateOrDuration || 0) === 0) {
      return format(startDate, "dd/MM/yyyy");
    } else {
      return `${format(startDate, "dd/MM/yyyy")}–${format(
        endDateOrDuration,
        "dd/MM/yyyy"
      )}`;
    }
  }
}

/**
 * Handles time interval
 *
 * ---
 *
 * Choose `endDate` or `duration`
 * @param startDate The date before
 * @param endDate The date after
 * @param duration The duration after the start date until the end
 */
export function formatTime(startDate: Date, duration: number): string;
export function formatTime(startDate: Date, endDate: Date): string;
export function formatTime(
  startDate: Date,
  endDateOrDuration: number | Date
): string | void {
  // If duration is inputted
  if (typeof endDateOrDuration === "number") {
    return `${format(startDate, "HH:mm")}–${format(
      addMinutes(startDate, endDateOrDuration),
      "HH:mm"
    )}`;
  }

  // If end date is inputted
  else if (endDateOrDuration instanceof Date) {
    return `${format(startDate, "HH:mm")}–${format(
      endDateOrDuration,
      "HH:mm"
    )}`;
  }
}
