// Modules
import { useRouter } from "next/router";

// Components
import MaterialIcon from "@components/global/icon";

/**
 * Displays information and actions at the top of a screen
 * @param title The display text, usually the page title
 */
const TopAppBar = ({ title }: { title: string }): JSX.Element => {
  return (
    <header className="w-full p-4 bg-light-surface2 dark:bg-dark-surface2 sm:p-7">
      <button className="btn btn-text p-0" onClick={() => history.back()}>
        <MaterialIcon
          icon="arrow_back"
          className="text-light-on-surface-variant dark:text-dark-on-surface-variant"
        />
      </button>
      <h1 className="sm:text-3xl text-light-on-surface dark:text-dark-on-surface">
        {title}
      </h1>
    </header>
  );
};

// Exports
export default TopAppBar;
