// Types
import { ActionOpensLink } from "@utils/types/feed/action";

const ActionOpensSite = ({ action }: { action: ActionOpensLink }) => {
  return (
    <a
      key={action.name}
      href={action.url}
      target="_blank"
      rel="noreferrer"
      className={`btn ${
        action.importance == 1
          ? "btn-filled"
          : action.importance == 2
          ? "btn-outlined"
          : action.importance == 3 && "btn-text"
      }`}
    >
      {action.name}
    </a>
  );
};

export default ActionOpensSite;
