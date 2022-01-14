// Modules
import { format } from "date-fns";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

// Utils
import { formatTime } from "@utils/date";

const SubjectPeriodAttachment = ({
  subjectPeriod,
}: {
  subjectPeriod: SubjectPeriod;
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
        title={<h4 className="text-lg">Period: {subjectPeriod.subject.localName.name}</h4>}
        subhead={`${format(
          subjectPeriod.periodStart,
          "dd/MM/yyyy"
        )} ${formatTime(
          subjectPeriod.periodStart,
          subjectPeriod.periodLength
        )}`}
      />
    </li>
  );
};

export default SubjectPeriodAttachment;
