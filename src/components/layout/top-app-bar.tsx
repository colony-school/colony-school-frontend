// Components
import MaterialIcon from "@components/global/icon/material";

/**
 * Displays information and actions at the top of a screen
 * @param title The display text, usually the page title
 */
const TopAppBar = ({
  title,
  scrim,
  className,
}: {
  title: string;
  scrim?: boolean;
  className?: string;
}): JSX.Element => {
  return (
    <header
      className={`flex flex-row items-center gap-4 w-full h-16 p-4 shadow-md
        sm:flex-col sm:items-start sm:gap-0 sm:h-fit sm:p-7 sm:shadow-none ${
        scrim
          ? "bg-gradient-to-b from-[#000000dd] to-transparent"
          : "bg-light-surface2 dark:bg-dark-surface2"
      } ${className || ""}`}
    >
      <button className="btn btn-text p-0" onClick={() => history.back()}>
        <MaterialIcon
          icon="arrow_back"
          className={
            scrim
              ? "text-light-surface-variant dark:text-on-surface-variant"
              : "text-light-on-surface-variant dark:text-dark-on-surface-variant"
          }
        />
      </button>
      <h1
        className={`font-display text-2xl sm:text-3xl ${
          scrim
            ? "text-light-surface dark:text-dark-on-surface"
            : "text-light-on-surface dark:text-dark-on-surface"
        }`}
      >
        {title}
      </h1>
    </header>
  );
};

// Exports
export default TopAppBar;
