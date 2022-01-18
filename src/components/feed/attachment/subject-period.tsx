// Modules
import { format } from "date-fns";

// Components
import ScheduleDiagram from "@components/schedule/diagram";
import MaterialIcon from "@components/global/icon/material";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";
import { ScheduleDiagram as ScheduleDiagramType } from "@utils/types/subject/schedule/diagram";

// Utils
import { formatTime } from "@utils/date";

const SubjectPeriodAttachment = ({
  subjectPeriod,
  relevantSchedule,
}: {
  subjectPeriod: SubjectPeriod;
  relevantSchedule: ScheduleDiagramType;
}) => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 container-secondary">
      <Title
        icon={
          <MaterialIcon
            icon="view_carousel"
            className="text-light-secondary dark:text-dark-secondary"
          />
        }
        title={
          <h4 className="text-lg">
            Period: {subjectPeriod.subject.enName.name}
          </h4>
        }
        subhead={`${format(
          subjectPeriod.periodStart,
          "dd/MM/yyyy"
        )} ${formatTime(
          subjectPeriod.periodStart,
          subjectPeriod.periodLength
        )}`}
      />
      <ScheduleDiagram schedule={relevantSchedule} />
    </li>
  );
};

export default SubjectPeriodAttachment;
