// Modules
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
  value,
}: {
  name: string;
  onClick: Function;
  value?: boolean;
}) => {
  const [active, setActive] = useState<boolean>(value || false);

  return (
    <button
      className="chip border border-light-outline dark:border-dark-outline"
      onClick={() => {
        onClick(active);
        setActive(!active);
      }}
    >
      {name}
    </button>
  );
};

export default FilterChip;
