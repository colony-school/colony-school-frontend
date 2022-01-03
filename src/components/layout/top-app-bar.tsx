// Components
import MaterialIcon from "@components/global/icon";
import { useRouter } from "next/router";
import { navGroups } from "./pages";

/**
 * Displays information and actions at the top of a screen
 */
const TopAppBar = (): JSX.Element => {
  const path = useRouter().asPath;

  return (
    <header className="w-full p-4 bg-light-surface2 dark:bg-dark-surface2 sm:p-7">
      <button className="btn btn-text p-0">
        <MaterialIcon
          icon="arrow_back"
          className="text-light-on-surface-variant dark:text-dark-on-surface-variant"
        />
      </button>
      <h1 className="sm:text-3xl text-light-on-surface dark:text-dark-on-surface">
        {
          navGroups
            .filter((group) =>
              group.items.filter((item) => path == item.url)
            )[0]
            .items.filter((item) => path == item.url)[0].name
        }
      </h1>
    </header>
  );
};

// Exports
export default TopAppBar;
