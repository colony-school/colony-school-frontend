// Modules
import { format } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";

// Components
import Status from "@components/assignments/status";
import MaterialIcon from "@components/global/icon/material";
import Title from "@components/global/title";

// Types
import { Assignment as AssignmentAttachment } from "@utils/types/assignment";

/**
 *
 * @param assignment
 */
const AssignmentAttachment = ({
  assignment,
}: {
  assignment: AssignmentAttachment;
}) => {
  return (
    <li className="flex flex-col sm:grid sm:grid-cols-2 container-primary">
      <Title
        icon={
          <MaterialIcon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={
          <h4 className="font-display text-lg">
            Assignment: {assignment.name}
          </h4>
        }
        subhead={assignment.subject}
      />
      <Title
        icon={
          <MaterialIcon
            icon="calendar_today"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={
          <h4 className="flex flex-row gap-2 items-center font-display text-lg">
            Status:{" "}
            <Status
              status={assignment.status}
              urgent={assignment.urgent}
              pastDue={getUnixTime(assignment.due) < getUnixTime(new Date())}
              chipClassName="px-2 py-0 font-sans text-light-on-primary rounded-full \
                bg-light-primary dark:text-dark-on-primary dark:bg-dark-primary"
              containerClassName="gap-1"
            />
          </h4>
        }
        subhead={`Due on ${format(assignment.due, "dd/MM/yyyy HH:mm")}`}
      />
    </li>
  );
};

export default AssignmentAttachment;
