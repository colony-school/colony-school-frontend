// Modules
import { set } from "date-fns";
import format from "date-fns/format";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject";

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
        title={<h4>Period: {subjectPeriod.name}</h4>}
        subhead={format(set(new Date(), subjectPeriod.periodStart), "HH:mm")}
      />
    </li>
  );
};

export default SubjectPeriodAttachment;
