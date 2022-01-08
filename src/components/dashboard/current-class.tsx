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
import PeriodTimeLeft from "@components/subject-period/period-time-left";

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
        noPadding={true}
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
        noPadding={true}
      />
      <Headline
        icon={
          <MaterialIcon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        subhead={<p className="text-xl">{dueNumber} assignments due</p>}
        noPadding={true}
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
          periodStart={subjectPeriod.periodStart}
          periodLength={subjectPeriod.periodLength}
          dueNumber={dueNumber}
        />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
        <div className="p-4">
          <PeriodTimeLeft
            periodStart={subjectPeriod.periodStart}
            periodLength={subjectPeriod.periodLength}
            withLabel={true}
          />
        </div>
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
