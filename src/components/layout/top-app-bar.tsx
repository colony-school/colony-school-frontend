// Components
import Icon from "@components/global/icon";

/**
 * Displays information and actions at the top of a screen
 */
const TopAppBar = (): JSX.Element => {
  return (
    <header className="bg-light-surface2 dark:bg-dark-surface2">
      <Icon
        icon="arrow_back"
        className="text-light-on-surface-variant dark:text-dark-on-surface-variant"
      />
      <h1 className="text-light-on-surface dark:text-dark-on-surface">
        Colony School
      </h1>
    </header>
  );
};

// Exports
export default TopAppBar;
