import MaterialIcon from "@components/global/icon";
import { useState } from "react";

const ChoiceChip = ({
  choices,
  onChange,
  value,
}: {
  choices: Array<{
    id: any;
    name: string;
    activeStyle?: string;
  }>;
  onChange: Function;
  value: any;
}) => {
  const [activeID, setActiveID] = useState(value);

  return (
    <div className="flex flex-row gap-1">
      {choices.map((choice) => (
        <button
          className={`chip rounded-none first:rounded-l last:rounded-r ${
            choice.id == activeID
              ? choice.activeStyle || "container-secondary"
              : "outline-2 outline-light-outline dark:outline-dark-outline outline-offset-[-2px]"
          }`}
          onClick={() => {
            setActiveID(choice.id);
            onChange(activeID);
          }}
        >
          {choice.id == activeID && (
            <MaterialIcon icon="check" className="text-lg" />
          )}
          {choice.name}
        </button>
      ))}
    </div>
  );
};

export default ChoiceChip;
