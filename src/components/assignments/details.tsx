// Modules
import { formatDuration, intervalToDuration } from "date-fns";
import format from "date-fns/format";
import isPast from "date-fns/isPast";
import ReactMarkdown from "react-markdown";

// Components
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon/material";
import Title from "@components/global/title";
import ChoiceChip from "@components/input/chip/choice";
import FilterChip from "@components/input/chip/filter";

// Types
import { Assignment } from "@utils/types/assignment";

/**
 * Displays more info about an assignment, like the due date and description
 * @param assignment An assignment object
 */
const AssignmentDetails = ({
  assignment,
}: {
  assignment: Assignment;
}): JSX.Element => {
  return (
    <div>
      <Title title={<h2>{assignment.name}</h2>} subhead={assignment.subject} />
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        <Title
          icon={
            <MaterialIcon
              icon="calendar_today"
              className="text-light-primary dark:text-dark-primary"
            />
          }
          title={<h3>Due Date</h3>}
          subhead={format(assignment.due, "dd/MM/yyyy HH:mm")}
        />
        <Title
          icon={
            <MaterialIcon
              icon={
                isPast(assignment.due)
                  ? assignment.status == "done"
                    ? "hourglass_bottom"
                    : "assignment_late"
                  : "hourglass_top"
              }
              className="text-light-primary dark:text-dark-primary"
            />
          }
          title={
            <h3>
              {isPast(assignment.due)
                ? assignment.status == "done"
                  ? "Was Due"
                  : "Past Due"
                : "Time Left"}
            </h3>
          }
          subhead={`${formatDuration(
            intervalToDuration({ start: assignment.due, end: new Date() }),
            { format: ["years", "months", "days", "hours"] }
          )} ${isPast(assignment.due) ? "ago" : "left"}`}
        />
      </div>
      <Headline
        icon={
          <MaterialIcon
            icon="assignment"
            className="self-center text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3 className="w-full text-xl font-medium">Status</h3>}
        subhead={
          <div className="flex flex-row flex-wrap gap-2">
            <ChoiceChip
              choices={[
                {
                  id: "not-started",
                  name: "Not started",
                  style: {
                    active: "container-tertiary",
                    inactive:
                      "transition-colors \
                        hover:bg-light-tertiary-0.08-tlc hover:dark:bg-dark-tertiary-0.08-tlc transition-none \
                        focus:bg-light-tertiary-0.12-tlc focus:dark:bg-dark-tertiary-0.12-tlc ring-0",
                  },
                },
                {
                  id: "started",
                  name: "Started",
                  style: {
                    active: "container-secondary",
                    inactive:
                      "transition-colors \
                        hover:bg-light-secondary-0.08-tlc hover:dark:bg-dark-secondary-0.08-tlc transition-none \
                        focus:bg-light-secondary-0.12-tlc focus:dark:bg-dark-secondary-0.12-tlc ring-0",
                  },
                },
                {
                  id: "done",
                  name: "Done",
                  style: {
                    active: "container-primary",
                    inactive:
                      "transition-colors \
                        hover:bg-light-primary-0.08-tlc hover:dark:bg-dark-primary-0.08-tlc transition-none \
                        focus:bg-light-primary-0.12-tlc focus:dark:bg-dark-primary-0.12-tlc ring-0",
                  },
                },
              ]}
              onChange={(id: "not-started" | "started" | "done") => {}}
              value={assignment.status}
            />
            <FilterChip
              name="Urgent"
              onClick={(active: boolean) => {}}
              style={{
                active: "container-error",
                inactive:
                  "transition-colors \
                    hover:bg-light-error-0.08-tlc hover:dark:bg-dark-error-0.08-tlc transition-none \
                    focus:bg-light-error-0.12-tlc focus:dark:bg-dark-error-0.12-tlc ring-0",
              }}
              value={assignment.urgent}
            />
            {isPast(assignment.due) && assignment.status != "done" && (
              <div
                className="chip text-light-on-error dark:text-dark-on-error
                    bg-light-error dark:bg-dark-error"
              >
                Past Due
              </div>
            )}
          </div>
        }
        gap={4}
      />
      <h3 className="sr-only">Description</h3>
      <ReactMarkdown className="p-4">{assignment.desc}</ReactMarkdown>
      <div className="flex flex-row justify-end items-center gap-2 p-4">
        <button className="btn btn-outlined">Compose about</button>
        {assignment.source && (
          <a
            href={assignment.source}
            target="_blank"
            rel="noreferrer"
            className="btn btn-filled"
          >
            Open in Classroom
          </a>
        )}
      </div>
    </div>
  );
};

export default AssignmentDetails;
