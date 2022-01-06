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
 * Handles date interval, shows the date only once if the date is the same
 *
 * ---
 *
 * Choose `endDate` or `duration`
 * @param startDate The date before
 * @param endDate The date after
 * @param duration The duration after the start date until the end
 */
export function formatDate(
  startDate: Date,
  endDate?: Date,
  duration?: number
): string | void {
  if (duration) {
    return `${format(startDate, "dd/MM/yyyy")}–${format(
      addMinutes(startDate, duration),
      "dd/MM/yyyy"
    )}`;
  } else if (endDate) {
    if (differenceInDays(startDate || 0, endDate || 0) === 0) {
      return format(startDate, "dd/MM/yyyy");
    } else {
      return `${format(startDate, "dd/MM/yyyy")}–${format(
        endDate,
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
export function formatTime(
  startDate: Date,
  endDate?: Date,
  duration?: number
): string | void {
  if (duration) {
    return `${format(startDate, "HH:mm")}–${format(
      addMinutes(startDate, duration),
      "HH:mm"
    )}`;
  } else if (endDate) {
    return `${format(startDate, "HH:mm")}–${format(endDate, "HH:mm")}`;
  } else {
    return "Invalid time";
  }
}
