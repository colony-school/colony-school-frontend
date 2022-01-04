const StatusChip = ({ status }: { status: "not-started" | "started" | "done"; }) => {
  switch (status) {
    case "not-started":
      return (
        <div
          className="chip text-light-on-tertiary-container bg-light-tertiary-container
          dark:text-dark-on-tertiary-container dark:bg-dark-tertiary-container"
        >
          Not started
        </div>
      );
    
    case "started":
      return (
        <div
          className="chip text-light-on-secondary-container bg-light-secondary-container
          dark:text-dark-on-secondary-container dark:bg-dark-secondary-container"
        >
          Started
        </div>
      );
    
    case "done":
      return null;
  
    default:
      return null;
  }
  return (
    <div>

    </div>
  );
}

const Status = ({
  status,
  urgent,
  pastDue,
}: {
  status: "not-started" | "started" | "done";
  urgent: boolean;
  pastDue: boolean;
}): JSX.Element => {
  return (
    <div className="flex flex-row gap-2">
      {urgent && (
        <div
          className="chip text-light-on-error-container bg-light-error-container
        dark:text-dark-on-error-container dark:bg-dark-error-container"
        >
          Urgent
        </div>
      )}
      {pastDue && (
        <div
          className="chip text-light-on-error bg-light-error
          dark:text-dark-on-error dark:bg-dark-error"
        >
          Past due
        </div>
      )}
      <StatusChip status={status} />
    </div>
  );
};

export default Status;