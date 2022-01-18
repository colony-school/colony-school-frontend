// Modules
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon/material";

const ChoiceChip = ({
  choices,
  onChange,
  value,
}: {
  choices: Array<{
    id: any;
    name: string;
    style?: { active: string; inactive: string };
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
              ? `ring-0 ${choice.style?.active || "container-secondary"}`
              : `outline-2 outline-light-outline dark:outline-dark-outline outline-offset-[-2px]
                ${choice.style?.inactive}`
          }`}
          onClick={() => {
            setActiveID(choice.id);
            onChange(activeID);
          }}
          aria-disabled={choice.id == activeID}
          key={choice.id}
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
