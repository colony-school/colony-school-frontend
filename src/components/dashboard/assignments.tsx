// Modules
import Link from "next/link";

// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";
import Status from "@components/assignments/status";

// Types
import { Assignment } from "@utils/types/assignment";
import { getUnixTime } from "date-fns";

/**
 *
 * @param assignment
 */
const AssignmentItem = ({
  assignment,
}: {
  assignment: Assignment;
}): JSX.Element => {
  return (
    <li>
      <Link href={`/assignments?id=${assignment.id}`}>
        <a
          className="flex flex-row justify-between items-end p-4 hover:bg-light-primary-0.08-tlc
          focus:bg-light-primary-0.12-tlc active:bg-light-primary-0.12-tlc"
        >
          <div>
            <p className="font-bold text-lg">
              {assignment.name}
            </p>
            <p className="text-light-on-surface-variant dark:text-dark-on-surface-variant text-base">
              {assignment.subject}
              {" • "}
              {assignment.due.toLocaleDateString("th-TH")}
            </p>
          </div>
          <Status
            status={assignment.status}
            urgent={assignment.urgent}
            pastDue={getUnixTime(assignment.due) > getUnixTime(new Date())}
          />
        </a>
      </Link>
    </li>
  );
};

const Assignments = ({
  assignments,
}: {
  assignments: Array<Assignment>;
}): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <MaterialIcon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3>Due Soon</h3>}
      />
      <ul>
        {assignments.map((assignment) => {
          return <AssignmentItem assignment={assignment} key={assignment.id} />;
        })}
      </ul>
      <div className="flex flex-row justify-end p-4">
        <Link href="/assignments">
          <a className="btn btn-filled">See all</a>
        </Link>
      </div>
    </section>
  );
};

export default Assignments;
