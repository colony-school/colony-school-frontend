// Modules
import { format, getDay, getHours, getMinutes } from "date-fns";

// Types
import { Schedule as ScheduleType } from "@utils/types/schedule";

// Utilities
import { weekToString } from "@utils/date";

/**
 * The schedule
 * @param schedule A list of lists of subject periods
 */
const Schedule = ({ schedule }: { schedule: ScheduleType }) => {
  const scheduleStartTime =
    (schedule.scheduleStartTime.hours * 60 +
      schedule.scheduleStartTime.minutes) *
    2.5;

  return (
    <figure className="flex flex-col gap-2 p-7 w-fit">
      {schedule.content.map((scheduleWeek) => {
        return (
          <ul className="flex flex-row gap-4">
            <li className="card container-primary p-3 w-40">
              <p className="text-lg font-bold">
                {weekToString(getDay(scheduleWeek.weekDate))}
              </p>
              <p className="text-base">
                {format(scheduleWeek.weekDate, "dd/MM/yyyy")}
              </p>
            </li>
            <li>
              <ul className="relative">
                {scheduleWeek.content.map((subjectPeriod) => {
                  return (
                    <li
                      className="absolute px-1"
                      style={{
                        width: subjectPeriod.periodLength * 2.5,
                        left:
                          (getHours(subjectPeriod.periodStart) * 60 +
                            getMinutes(subjectPeriod.periodStart)) *
                            2.5 -
                          scheduleStartTime,
                      }}
                    >
                      <button
                        className="card flex flex-col p-3 text-left text-light-on-surface bg-light-surface1
                        dark:text-dark-on-surface dark:bg-dark-surface1 transition-shadow overflow-hidden
                          hover:shadow focus-visible:shadow"
                      >
                        <p className="text-lg font-bold max-lines-1">
                          {subjectPeriod.name}
                        </p>
                        <p className="text-base max-lines-1">
                          {subjectPeriod.instructors[0]?.name}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        );
      })}
    </figure>
  );
};

export default Schedule;
