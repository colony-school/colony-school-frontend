// Modules
import MaterialIcon from "@components/global/icon";
import { useState } from "react";

/**
 * Filter chips use tags or descriptive words to filter content,
 * clicking on a filter chip activates it and appends a leading icon
 * @param name Display text
 * @param onClick The function triggered once filter is clicked
 * @param value The default active value of the chip
 */
const FilterChip = ({
  name,
  onClick,
  activeStyle,
  value,
}: {
  name: string;
  onClick: Function;
  activeStyle?: string;
  value?: boolean;
}) => {
  const [active, setActive] = useState<boolean>(value || false);

  return (
    <button
      className={`chip transition-opacity ${
        active
          ? activeStyle || "container-secondary"
          : "outline-2 outline-light-outline dark:outline-dark-outline outline-offset-[-2px]"
      }`}
      onClick={() => {
        setActive(!active);
        onClick(active);
      }}
    >
      {active && <MaterialIcon icon="check" className="text-lg" />}
      {name}
    </button>
  );
};

export default FilterChip;
