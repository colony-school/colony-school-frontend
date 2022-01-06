// Modules
import { format, set } from "date-fns";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject";

// Utils
import { formatTime } from "@utils/date";

const SubjectPeriodAttachment = ({
  subjectPeriod,
}: {
  subjectPeriod: SubjectPeriod;
}) => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 bg-light-secondary-container dark:bg-dark-secondary-container">
      <Title
        icon={
          <MaterialIcon
            icon="view_carousel"
            className="text-light-secondary dark:text-dark-secondary"
          />
        }
        title={<h4 className="text-lg">Period: {subjectPeriod.name}</h4>}
        subhead={`${format(
          set(new Date(), subjectPeriod.periodStart),
          "dd/MM/yyyy"  // only time is fixed with the current approach, even though the date must be fixed as well for this to work
        )} ${formatTime(
          set(new Date(), subjectPeriod.periodStart),
          undefined,
          subjectPeriod.periodLength
        )}`}
      />
    </li>
  );
};

export default SubjectPeriodAttachment;
