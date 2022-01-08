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
        <div className={`chip container-tertiary ${className || ""}`}>
          Not started
        </div>
      );

    case "started":
      return (
        <div className={`chip container-secondary ${className || ""}`}>
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
    <div
      className={`flex flex-row flex-wrap gap-2 ${containerClassName || ""}`}
    >
      {urgent && (
        <div className={`chip cotnainer-error ${chipClassName || ""}`}>
          Urgent
        </div>
      )}
      {pastDue && (
        <div
          className={`chip container-error ${chipClassName || ""}`}
        >
          Past due
        </div>
      )}
      <StatusChip status={status} className={chipClassName} />
    </div>
  );
};

export default Status;
