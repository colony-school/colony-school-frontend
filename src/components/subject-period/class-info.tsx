// Modules
import { addMinutes, format } from "date-fns";

// Components
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon";

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
  noPadding,
  className,
}: {
  instructors: Array<{
    firstName: string;
    middleName?: string;
    lastName: string;
  }>;
  periodStart: Date;
  periodLength: number;
  dueNumber: number;
  noPadding?: boolean;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-col gap-3 ${noPadding || "px-4 pb-4"} ${
        className || ""
      }`}
    >
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
            {instructors.length == 0 ? (
              <li className="text-light-error dark:text-dark-error">
                No instructors
              </li>
            ) : (
              instructors.map((instructor) => {
                return (
                  <li key={instructor.firstName}>
                    {instructor.firstName} {instructor.middleName} {instructor.lastName}
                  </li>
                );
              })
            )}
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
        subhead={
          <p className="text-xl">
            {dueNumber} {dueNumber == 1 ? "assignment" : "assignments"} due
          </p>
        }
        noPadding={true}
      />
    </div>
  );
};

export default ClassInfo;
