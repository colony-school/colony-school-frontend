// Components
import Icon from "@components/global/icon";

/**
 * Displays information and actions at the top of a screen
 */
const TopAppBar = (): JSX.Element => {
  return (
    <header className="w-full p-4 bg-light-surface2 dark:bg-dark-surface2 sm:p-7">
      <button className="btn btn-text p-0">
        <Icon
          icon="arrow_back"
          className="text-light-on-surface-variant dark:text-dark-on-surface-variant"
        />
      </button>
      <h1 className="sm:text-3xl text-light-on-surface dark:text-dark-on-surface">
        Colony School
      </h1>
    </header>
  );
};

// Exports
export default TopAppBar;
