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
        <div className={`chip ${className || "container-tertiary"}`}>
          Not started
        </div>
      );

    case "started":
      return (
        <div className={`chip ${className || "container-secondary"}`}>
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
  minified,
  chipClassName,
  containerClassName,
}: {
  status: "not-started" | "started" | "done";
  urgent: boolean;
  pastDue: boolean;
  minified: boolean;
  chipClassName?: string;
  containerClassName?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-row flex-wrap gap-2 ${containerClassName || ""}`}
    >
      {urgent && (
        <div className={`chip ${chipClassName || "container-error"}`}>
          Urgent
        </div>
      )}
      {pastDue && (
        <div
          className={`chip ${
            chipClassName ||
            "text-light-on-error bg-light-error \
             dark:text-dark-on-error dark:bg-dark-error"
          }`}
        >
          Past due
        </div>
      )}
      {minified && (pastDue || urgent) || (
        <StatusChip status={status} className={chipClassName} />
      )}
    </div>
  );
};

export default Status;
