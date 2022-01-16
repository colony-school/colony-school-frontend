// Modules
import Link from "next/link";

// Types
import { ActionOpensLink } from "@utils/types/feed/action";

// Utils
import actionClassName from "@utils/action-class-name";

/**
 * This action goes to a page within Colony School
 * @param action An action object
 */
const ActionGoesToPage = ({ action }: { action: ActionOpensLink }) => {
  return (
    <Link href={action.url}>
      <a
        key={action.name}
        className={actionClassName(action.importance)}
      >
        {action.icon}
        {action.name}
      </a>
    </Link>
  );
};

export default ActionGoesToPage;
