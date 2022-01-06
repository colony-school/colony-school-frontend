const StatusChip = ({
  status,
  className,
}: {
  status: "not-started" | "started" | "done";
  className?: string;
}): JSX.Element | null => {
  switch (status) {
    case "not-started":
      return (
        <div
          className={`chip text-light-on-tertiary-container bg-light-tertiary-container
          dark:text-dark-on-tertiary-container dark:bg-dark-tertiary-container ${
            className || ""
          }`}
        >
          Not started
        </div>
      );

    case "started":
      return (
        <div
          className={`chip text-light-on-secondary-container bg-light-secondary-container
          dark:text-dark-on-secondary-container dark:bg-dark-secondary-container ${
            className || ""
          }`}
        >
          Started
        </div>
      );

    default:
      return null;
  }
};

const Status = ({
  status,
  urgent,
  pastDue,
  chipClassName,
  containerClassName,
}: {
  status: "not-started" | "started" | "done";
  urgent: boolean;
  pastDue: boolean;
  chipClassName?: string;
  containerClassName?: string;
}): JSX.Element => {
  return (
    <div className={`flex flex-row gap-2 ${containerClassName || ""}`}>
      {urgent && (
        <div
          className={`chip text-light-on-error-container bg-light-error-container
        dark:text-dark-on-error-container dark:bg-dark-error-container ${
          chipClassName || ""
        }`}
        >
          Urgent
        </div>
      )}
      {pastDue && (
        <div
          className={`chip text-light-on-error bg-light-error
          dark:text-dark-on-error dark:bg-dark-error ${chipClassName || ""}`}
        >
          Past due
        </div>
      )}
      <StatusChip status={status} className={chipClassName} />
    </div>
  );
};

export default Status;
