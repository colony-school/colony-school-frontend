// Components
import MaterialIcon from "@components/global/icon/material";
import PeriodTimeLeft from "@components/subject-period/period-time-left";

/**
 * An attempt to not look like Google Classroom
 * @param name The name of the class (e.g. M.405)
 * @param moderator The name of the moderator
 * @param currentClass Information about the current class this class is having (subject name, when it starts, and period length)
 */
const ActionCard = ({
  name,
  moderator,
  currentClass,
}: {
  name: string;
  moderator: string;
  currentClass: {
    name: string;
    periodStart: Date;
    periodLength: number;
  };
}): JSX.Element => {
  return (
    <header
      className="flex flex-col gap-4 w-[42ch] max-w-full mx-2 py-4 px-8 font-display
        bg-light-primary-container dark:bg-dark-primary-container rounded-3xl shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-6xl font-bold">{name}</h2>
        <p className="text-xl font-medium">
          Moderated by {moderator}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-1">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-end">
          <p className="text-xl">{currentClass.name}</p>
          <div className="flex flex-row gap-1">
            <button className="btn btn-outlined flex p-2 rounded-full">
              <MaterialIcon icon="subject" />
            </button>
            <button className="btn btn-outlined flex p-2 rounded-full">
              <MaterialIcon icon="schedule" />
            </button>
            <button className="btn btn-filled flex rounded-full">
              <MaterialIcon icon="videocam" />
            </button>
          </div>
        </div>
        <PeriodTimeLeft
          periodStart={currentClass.periodStart}
          periodLength={currentClass.periodLength}
        />
      </div>
    </header>
  );
};

export default ActionCard;
