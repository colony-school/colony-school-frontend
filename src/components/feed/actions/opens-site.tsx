// Types
import { ActionOpensLink } from "@utils/types/feed/action";

/**
 * This action opens a link on a completely new tab
 * @param action An action object
 */
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
