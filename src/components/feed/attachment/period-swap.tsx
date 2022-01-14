// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

/**
 * Displays the periods wapped via both text and diagram
 * @param periodsSwapped A list of the periods that are swapped, there should be 2 periods in this list
 */
const PeriodSwapAttachment = ({
  periods,
}: {
  periods: [SubjectPeriod, SubjectPeriod];
}) => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 container-secondary">
      <Title
        icon={
          <MaterialIcon
            icon="swap_horiz"
            className="text-light-secondary dark:text-dark-secondary"
          />
        }
        title={<h4 className="text-lg">Periods Swapped</h4>}
        subhead={
          periods.length == 2 ? `${periods[0].subject.localName.name} and ${periods[1].subject.localName.name}` : ""
        }
      />
    </li>
  );
};

export default PeriodSwapAttachment;
