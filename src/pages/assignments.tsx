// Modules
import { format, getUnixTime } from "date-fns";
import { NextPage } from "next";

// Components
import Status from "@components/assignments/status";
import Search from "@components/input/search";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { Assignment } from "@utils/types/assignment";
import { useState } from "react";

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
        className="flex flex-row justify-between items-end p-4 h-20"
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
        <Status
          status={assignment.status}
          urgent={assignment.urgent}
          pastDue={getUnixTime(assignment.due) < getUnixTime(new Date())}
        />
      </button>
    </li>
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
          <div className="card card-elevated p-4">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
