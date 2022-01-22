// Modules
import { getDay } from "date-fns";

// Types
import {
  ScheduleDiagram,
  ScheduleDiagramItem,
} from "@utils/types/subject/schedule/diagram";

// Utils
import { to3LetterDay, weekToString } from "@utils/date";

/**
 * An item in the Schedule Diagram
 */
const ScheduleDiagramItem = ({
  scheduleItem,
  scheduleStartTime,
}: {
  scheduleItem: ScheduleDiagramItem;
  scheduleStartTime: number;
}) => {
  return (
    <div
      className="absolute h-6 px-[0.1rem]"
      style={{
        width: scheduleItem.periodLength * 0.4,
        left:
          (scheduleItem.periodStart.hours * 60 +
            scheduleItem.periodStart.minutes) *
            0.4 -
          scheduleStartTime,
      }}
    >
      <div
        className={`h-full w-full rounded-full ${
          scheduleItem.relevant
            ? scheduleItem.break
              ? "outline outline-2 outline-light-secondary dark:outline-dark-on-secondary outline-offset-[-2px]"
              : "bg-light-secondary dark:bg-dark-secondary"
            : scheduleItem.break
            ? "outline outline-2 outline-light-on-secondary dark:outline-dark-on-secondary outline-offset-[-2px]"
            : "bg-light-on-secondary dark:bg-dark-on-secondary"
        }`}
      ></div>
    </div>
  );
};

/**
 * Simplified diagram of the schedule
 *
 * Doesn't require all weeks to be inputted, schedule items can be highlighted
 */
const ScheduleDiagram = ({ schedule }: { schedule: ScheduleDiagram }) => {
  const scheduleStartTime =
    (schedule.scheduleStart.hours * 60 + schedule.scheduleStart.minutes) * 0.4;

  return (
    <figure aria-label="Schedule diagram">
      <ul className="flex flex-col gap-1 p-4">
        {schedule.content.map((scheduleWeek, index) => (
          <li
            aria-label={`There are ${
              scheduleWeek.content.length
            } periods on ${weekToString(
              getDay(scheduleWeek.weekDate)
            )}, where period ${
              scheduleWeek.content.findIndex(
                (scheduleItem) => scheduleItem.relevant
              ) + 1
            } is relevant.`}
            className="flex flex-row gap-1"
            key={index}
          >
            <p
              className="flex flex-row items-center
              font-bold text-base text-light-on-secondary-container dark:text-dark-on-secondary-container
              w-10 h-6 max-lines-1"
            >
              {to3LetterDay(getDay(scheduleWeek.weekDate))}
            </p>
            <ul className="relative w-48">
              {scheduleWeek.content.map((scheduleItem) => (
                <ScheduleDiagramItem
                  scheduleItem={scheduleItem}
                  scheduleStartTime={scheduleStartTime}
                  key={scheduleItem.id}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </figure>
  );
};

export default ScheduleDiagram;
