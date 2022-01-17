// Types
import { ActionOpensLink } from "@utils/types/feed/action";

// Utils
import { actionClassName } from "@utils/action";

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
      className={actionClassName(action.importance)}
    >
      {action.icon}
      {action.name}
    </a>
  );
};

export default ActionOpensSite;
