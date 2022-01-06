// Modules
import { addMinutes, differenceInDays } from "date-fns";
import format from "date-fns/format";

// Hi Jimmy, it seems date-fns doesn't have this feature and I find myself having to format dates a lot,
// so I kinda wrote a formatter. Sorry!

// Handles date, shows the date only once if the date is the same
function formatDate(
  startDate: Date,
  duration?: number,
  endDate?: Date
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

// Handles time
function formatTime(
  startDate: Date,
  duration?: number,
  endDate?: Date
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

/**
 * Formats an interval of dates or start date with duration
 * @param startDate The start date
 * @param duration Duration from the start date
 * @param endDate The end date
 * @param options.dateOnly Show only the dates
 * @param options.timeOnly Show only the times
 */
const Duration = ({
  startDate,
  duration,
  endDate,
  options,
}: {
  startDate: Date;
  duration?: number;
  endDate?: Date;
  options?: {
    dateOnly: boolean;
    timeOnly: boolean;
  };
}): string | void => {
  if (duration || endDate) {
    if (options) {
      if (options.dateOnly) {
        return formatDate(startDate, duration, endDate);
      } else if (options.timeOnly) {
        return formatTime(startDate, duration, endDate);
      }
    }
    return `${formatDate(startDate, duration, endDate)} ${formatTime(
      startDate,
      duration,
      endDate
    )}`;
  }
};

export default Duration;
