// Components
import MaterialIcon from "@components/global/icon";

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
    periodStart: { hours: number; minutes: number; seconds: number };
    periodLength: number;
  };
}): JSX.Element => {
  return (
    <header
      className="flex flex-col gap-4 w-[36ch] py-4 px-8 bg-light-primary-container dark:bg-dark-primary-container rounded-3xl
        shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-base">Moderated by {moderator}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-end">
          <p className="text-base">{currentClass.name}</p>
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
        <progress className="progress"></progress>
      </div>
    </header>
  );
};

export default ActionCard;