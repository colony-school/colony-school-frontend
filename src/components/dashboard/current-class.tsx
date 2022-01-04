// Modules
import {
  addMinutes,
  format,
  formatDuration,
  intervalToDuration,
  set,
} from "date-fns";

// Components
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon";
import { useEffect, useState } from "react";
import { SubjectPeriod } from "@utils/types/subject";

/**
 * Ongoing class infobox
 * @param instructors An array of instructors for this class
 * @param periodStart The start time of this class
 * @param periodLength The length of the period
 * @param dueNumber The number of assignments due this period
 */
const ClassInfo = ({
  instructors,
  periodStart,
  periodLength,
  dueNumber,
}: {
  instructors: Array<{ name: string }>;
  periodStart: Date;
  periodLength: number;
  dueNumber: number;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4">
      <Headline
        icon={
          <MaterialIcon
            icon="person"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3 className="text-base">Instructor</h3>}
        subhead={
          <ul className="text-xl">
            {instructors.map((instructor) => {
              return <li key={instructor.name}>{instructor.name}</li>;
            })}
          </ul>
        }
        className="p-0"
      />
      <Headline
        icon={
          <MaterialIcon
            icon="schedule"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3 className="text-base">Time</h3>}
        subhead={
          <p className="text-xl">
            {format(periodStart, "HH:mm")}–
            {format(addMinutes(periodStart, periodLength), "HH:mm")}
          </p>
        }
        className="p-0"
      />
      <Headline
        icon={
          <MaterialIcon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        subhead={<p className="text-xl">{dueNumber} assignments due</p>}
        className="p-0"
      />
    </div>
  );
};

/**
 * Displays both text and progress bar representation of the passage of time within a period.
 *
 * Teachers may dislike this...
 * @param periodStart The start time of this class
 * @param periodLength The length of the period
 */
const ClassTimeLeft = ({
  periodStart,
  periodLength,
}: {
  periodStart: Date;
  periodLength: number;
}): JSX.Element => {
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

  return (
    <div className="p-4">
      <p>{formatDuration(timeLeft)} left</p>
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
    </div>
  );
};

const ClassActions = ({
  ggc,
  meet,
}: {
  ggc: string;
  meet: string;
}): JSX.Element => {
  return (
    <div className="flex flex-row justify-end gap-2 p-4">
      <a
        href={`https://classroom.google.com/u/c/${ggc}`}
        target="_blank"
        className="btn btn-outlined"
      >
        Classroom
      </a>
      <a href={meet} target="_blank" className="btn btn-filled">
        <MaterialIcon icon="videocam" />
        Join Meet
      </a>
    </div>
  );
};

/**
 * Displays at-a-glance information about the current ongoing class
 *
 * We suspect users will just stare at the progress bar, though
 * @param subjectPeriod An instance of SubjectPeriod
 */
const CurrentClass = ({
  subjectPeriod,
}: {
  subjectPeriod: SubjectPeriod;
}): JSX.Element => {
  // Processing
  const periodStart = set(new Date(), subjectPeriod.periodStart);
  const dueNumber = subjectPeriod.assignmentsDue.length;

  return (
    <section
      className="w-full p-3 text-light-on-surface bg-light-surface2
      dark:text-dark-on-surface dark:bg-dark-surface2"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
        <div className="px-4 pb-4">
          <h2 className="text-xl">Current Class</h2>
          <h3 className="text-5xl font-bold">{subjectPeriod.name}</h3>
        </div>
        <ClassInfo
          instructors={subjectPeriod.instructors}
          periodStart={periodStart}
          periodLength={subjectPeriod.periodLength}
          dueNumber={dueNumber}
        />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
        <ClassTimeLeft
          periodStart={periodStart}
          periodLength={subjectPeriod.periodLength}
        />
        <ClassActions
          ggc="MzQzNTA0NDkyMjgx"
          meet="https://meet.google.com/zbm-wnny-fsi"
        />
      </div>
    </section>
  );
};

// Exports
export default CurrentClass;
