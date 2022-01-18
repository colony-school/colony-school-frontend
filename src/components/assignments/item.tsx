// Module
import format from "date-fns/format";
import isPast from "date-fns/isPast";

// Components
import Status from "@components/assignments/status";

// Types
import { Assignment } from "@utils/types/assignment";

/**
 * An item in the Assignment list
 */
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

export default AssignmentItem;
