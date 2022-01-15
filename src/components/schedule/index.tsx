// Modules
import { format, getDay, getHours, getMinutes } from "date-fns";

// Types
import {
  Schedule as ScheduleType,
  ScheduleItem as ScheduleItemType,
} from "@utils/types/subject/schedule";

// Utilities
import { weekToString } from "@utils/date";

/**
 * A subject period inside a schedule, only contains the subject name and the primary instructor
 */
const ScheduleItem = ({
  scheduleItem,
  scheduleStartTime,
  active,
  onClick,
}: {
  scheduleItem: ScheduleItemType;
  scheduleStartTime: number;
  active: boolean;
  onClick: Function;
}) => {
  return (
    <li
      className="absolute px-1"
      style={{
        width: scheduleItem.periodLength * 2.5,
        left:
          (scheduleItem.periodStart.hours * 60 +
            scheduleItem.periodStart.minutes) *
            2.5 -
          scheduleStartTime,
      }}
    >
      <button
        className={`card flex flex-col p-3 transition-shadow overflow-hidden ${
          active
            ? "text-light-on-secondary-container bg-light-secondary-container \
                 dark:text-dark-on-secondary-container dark:bg-dark-secondary-container shadow \
                 hover:shadow-md"
            : "text-light-on-surface bg-light-surface1 dark:text-dark-on-surface dark:bg-dark-surface1 \
                 hover:shadow focus:shadow focus:ring-0"
        }`}
        onClick={() => onClick(scheduleItem.id)}
      >
        <p className="text-lg font-bold max-lines-1">
          {scheduleItem.periodLength > 75
            ? scheduleItem.subject.enName.name
            : scheduleItem.subject.enName.shortName}
        </p>
        <p className="text-base max-lines-1">
          {scheduleItem.subject.instructors[0]?.firstName}
        </p>
      </button>
    </li>
  );
};

/**
 * The schedule
 * @param schedule A list of lists of subject periods
 * @param
 */
const Schedule = ({
  schedule,
  activeID,
  onClick,
}: {
  schedule: ScheduleType;
  activeID: number | null;
  onClick: Function;
}) => {
  const scheduleStartTime =
    (schedule.scheduleStart.hours * 60 + schedule.scheduleStart.minutes) * 2.5;

  return (
    <figure className="flex flex-col gap-2 p-7 w-fit">
      {schedule.content.map((scheduleWeek, index) => {
        return (
          <ul className="flex flex-row gap-4" key={index}>
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
                {scheduleWeek.content.map((scheduleItem, index) => {
                  return (
                    <ScheduleItem
                      scheduleItem={scheduleItem}
                      scheduleStartTime={scheduleStartTime}
                      active={activeID === scheduleItem.id}
                      onClick={onClick}
                      key={index}
                    />
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
