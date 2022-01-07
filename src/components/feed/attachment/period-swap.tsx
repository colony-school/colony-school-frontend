// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { SubjectPeriod } from "@utils/types/subject";

/**
 * Displays the periods wapped via both text and diagram
 * @param periodsSwapped A list of the periods that are swapped, there should be 2 periods in this list
 */
const PeriodSwapAttachment = ({
  periods,
}: {
  periods: Array<SubjectPeriod>;
}) => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 bg-light-secondary-container dark:bg-dark-secondary-container">
      <Title
        icon={
          <MaterialIcon
            icon="swap_horiz"
            className="text-light-secondary dark:text-dark-secondary"
          />
        }
        title={<h4 className="text-lg">Periods Swapped</h4>}
        subhead={`${periods[0]?.name || "Unknown"} and ${
          periods[1]?.name || "unknown"
        }`}
      />
    </li>
  );
};

export default PeriodSwapAttachment;
