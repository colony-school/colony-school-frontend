// Modules
import { NextPage } from "next";
import { useState } from "react";

// Components
import AssignmentDetails from "@components/assignments/details"
import AssignmentItem from "@components/assignments/item";
import Search from "@components/input/search";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { Assignment } from "@utils/types/assignment";

const ActiveAssignmentDisplay = ({
  assignment,
}: {
  assignment: Assignment;
}) => {
  return (
    <div className="card card-elevated">
      <AssignmentDetails assignment={assignment} />
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
      source: "https://cs50.harvard.edu/x/2022/psets/3/tideman/",
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
    source: "https://cs50.harvard.edu/x/2022/psets/3/tideman/",
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
