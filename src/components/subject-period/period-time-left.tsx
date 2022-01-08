import { addMinutes, formatDuration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

/**
 * Displays both text and progress bar representation of the passage of time within a period.
 *
 * Teachers may dislike this…
 * @param periodStart The start time of this class
 * @param periodLength The length of the period
 * @param withLabel If `true`, shows how much time is left in text form, updates every second fro maximum teacher annoyance
 */
const PeriodTimeLeft = ({
  periodStart,
  periodLength,
  withLabel,
}: {
  periodStart: Date;
  periodLength: number;
  withLabel?: boolean;
}) => {
  // Add minutes to the start time to get the end time
  const periodEnd = addMinutes(periodStart, periodLength);

  // How much time is left until the period ends
  const [timeLeft, setTimeLeft] = useState<Duration>(
    intervalToDuration({
      start: new Date(),
      end: periodEnd,
    })
  );

  // Updates timeLeft every second
  useEffect(() => {
    const clock = setInterval(
      () =>
        setTimeLeft(
          intervalToDuration({
            start: new Date(),
            end: periodEnd,
          })
        ),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  // Renders progress bar
  return (
    <>
      {withLabel && <p>{formatDuration(timeLeft)} left</p>}
      <progress
        value={
          periodLength * 60 -
          ((timeLeft.hours || 0) * 3600 +
            (timeLeft.minutes || 0) * 60 +
            (timeLeft.seconds || 0))
        }
        max={periodLength * 60}
        className="progress"
      />
    </>
  );
};

export default PeriodTimeLeft;
