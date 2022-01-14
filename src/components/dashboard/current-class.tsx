// Components
import MaterialIcon from "@components/global/icon";
import ClassInfo from "@components/subject-period/class-info";
import PeriodTimeLeft from "@components/subject-period/period-time-left";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

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
        rel="noreferrer"
        className="btn btn-outlined"
      >
        Classroom
      </a>
      <a href={meet} target="_blank" rel="noreferrer" className="btn btn-filled">
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
          <h3 className="text-5xl font-bold">{subjectPeriod.subject.name}</h3>
        </div>
        <ClassInfo
          instructors={subjectPeriod.subject.instructors}
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
