// Modules
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon";

/**
 * A search bar
 * @param onChange The function triggered when the input content changes
 * @param onSubmit The function triggered when the search button is clicked
 */
const Search = ({
  onChange,
  onSubmit,
}: {
  onChange?: Function;
  onSubmit?: Function;
}): JSX.Element => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="px-4 pt-4 pb-2">
      <div
        className="flex flex-row justify-between items-center w-full h-12 bg-light-surface dark:bg-dark-surface overflow-hidden shadow
        rounded-full"
      >
        <button
          className="btn-text grid place-items-center h-full px-4 text-light-on-surface dark:text-dark-on-surface"
          onClick={() => {
            if (onSubmit) {
              onSubmit(query);
            }
          }}
        >
          <MaterialIcon icon="search" />
        </button>
        <input
          className="block w-full h-full bg-light-surface dark:bg-dark-surface outline-none
          placeholder:text-light-on-surface placeholder:dark:text-dark-on-surface
          hover:transition-none hover:bg-light-primary-0.08-tlc hover:dark:bg-dark-primary-0.08-tlc
          focus:placeholder:text-light-on-surface-variant  focus:placeholder:dark:text-dark-on-surface-variant"
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
            setQuery(e.target.value);
          }}
          placeholder="Search events"
          role="search"
        />
        <button className="btn-text grid place-items-center h-full px-4 text-light-on-surface dark:text-dark-on-surface">
          <MaterialIcon icon="filter_list" />
        </button>
      </div>
    </div>
  );
};

export default Search;
