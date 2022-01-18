// Modules
import { format, formatDuration, intervalToDuration, isPast } from "date-fns";
import { NextPage } from "next";
import { useState } from "react";

// Components
import Status from "@components/assignments/status";
import Headline from "@components/global/headline";
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import Search from "@components/input/search";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { Assignment } from "@utils/types/assignment";
import FilterChip from "@components/input/chip/filter";

const AssignmentItem = ({
  assignment,
  active,
  setActiveID,
}: {
  assignment: Assignment;
  active: boolean;
  setActiveID: Function;
}): JSX.Element => {
  return (
    <li className={`list-page-list-item ${active ? "active" : "not-active"}`}>
      <button
        className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-end p-4 sm:h-20"
        onClick={() => {
          setActiveID(assignment.id);
        }}
      >
        <div className="flex flex-col">
          <p className="font-bold max-lines-1">{assignment.name}</p>
          <p className="max-lines-1">
            {assignment.subject}
            {" • "}
            {format(assignment.due, "dd/MM/yyyy")}
          </p>
        </div>
        <div className="flex flex-row w-full justify-end sm:w-fit">
          <Status
            status={assignment.status}
            urgent={assignment.urgent}
            pastDue={isPast(assignment.due)}
          />
        </div>
      </button>
    </li>
  );
};

const ActiveAssignmentDisplay = ({
  assignment,
}: {
  assignment: Assignment;
}) => {
  return (
    <div className="card card-elevated">
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
                isPast(assignment.due) ? "assignment_late" : "hourglass_full"
              }
              className="text-light-primary dark:text-dark-primary"
            />
          }
          title={
            <h3>{isPast(assignment.due) ? "Past Due by" : "Time Left"}</h3>
          }
          subhead={formatDuration(
            intervalToDuration({ start: assignment.due, end: new Date() }),
            { format: ["years", "months", "days", "hours"] }
          )}
        />
        <Headline
          icon={
            <MaterialIcon
              icon="assignment"
              className="self-center text-light-primary dark:text-dark-primary"
            />
          }
          title={<h3 className="w-full text-xl font-medium">Status</h3>}
          subhead={
            <div className="flex flex-row gap-2">
              <FilterChip
                name="Urgent"
                onClick={(active: boolean) => {}}
                activeStyle="container-error"
                value={false}
              />
              {isPast(assignment.due) && (
                <div className="chip text-light-on-error bg-light-error">
                  Past Due
                </div>
              )}
            </div>
          }
          gap={4}
        />
      </div>
    </div>
  );
};

/**
 * Your Assignment
 */
const AssignmentsPage: NextPage = () => {
  const [assignments, setAssignments] = useState<Array<Assignment>>([
    {
      id: 1,
      name: "Tideman",
      desc: "The **Tideman voting method** (also known as “ranked pairs”) is a ranked-choice voting method that’s guaranteed \
      to produce the Condorcet winner of the election if one exists.\n\n Generally speaking, the Tideman method works by \
      **constructing a “graph” of candidates**, where an **arrow** (i.e. edge) **from candidate A to candidate B** indicates \
      that **candidate A wins against candidate B** in a head-to-head matchup.",
      subject: "CS50",
      due: new Date(2021, 10, 6, 23, 59),
      status: "not-started",
      urgent: false,
    },
    {
      id: 18,
      name: "Lecture #2",
      desc: "Circular motion lecture",
      subject: "Physics",
      due: new Date(2022, 0, 8, 23, 59, 59),
      status: "started",
      urgent: false,
    },
  ]);

  const [activeID, setActiveID] = useState<number>(assignments[0]?.id || 0);
  const [activeAssignment, setActiveAssignment] = useState<Assignment>({
    id: 1,
    name: "Tideman",
    desc: "The **Tideman voting method** (also known as “ranked pairs”) is a ranked-choice voting method that’s guaranteed \
    to produce the Condorcet winner of the election if one exists.\n\n Generally speaking, the Tideman method works by \
    **constructing a “graph” of candidates**, where an **arrow** (i.e. edge) **from candidate A to candidate B** indicates \
    that **candidate A wins against candidate B** in a head-to-head matchup.",
    subject: "CS50",
    due: new Date(2021, 10, 6, 23, 59),
    status: "not-started",
    urgent: false,
  });

  const [query, setQuery] = useState<string>();

  return (
    <div className="flex flex-col sm:h-screen bg-light-surface2 dark:bg-dark-surface2">
      <div className="hidden sm:block">
        <TopAppBar title="Your Assignments" />
      </div>
      <div className="list-page">
        <div className="list-page-left">
          <div className="list-page-search">
            <Search
              placeholder="Search assignments"
              onChange={(newQuery: string) => setQuery(newQuery)}
            />
          </div>
          <div className="list-page-list-container">
            <ul className="list-page-list">
              {assignments.map((assignment) => (
                <AssignmentItem
                  assignment={assignment}
                  active={activeID == assignment.id}
                  setActiveID={setActiveID}
                  key={assignment.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="list-page-right">
          <ActiveAssignmentDisplay assignment={activeAssignment} />
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
