// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import ScheduleDiagram from "@components/schedule/diagram";

// Types
import { ScheduleDiagram as ScheduleDiagramType } from "@utils/types/subject/schedule/diagram";
import { SubjectPeriod } from "@utils/types/subject/period";

/**
 * Displays the periods wapped via both text and diagram
 * @param periodsSwapped A list of the periods that are swapped, there should be 2 periods in this list
 */
const PeriodSwapAttachment = ({
  periods,
  relevantSchedule,
}: {
  periods: [SubjectPeriod, SubjectPeriod];
  relevantSchedule: ScheduleDiagramType;
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
          periods.length == 2
            ? `${periods[0].subject.enName.name} and ${periods[1].subject.enName.name}`
            : ""
        }
      />
      <ScheduleDiagram schedule={relevantSchedule} />
    </li>
  );
};

export default PeriodSwapAttachment;
