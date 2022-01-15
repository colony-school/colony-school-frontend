import { ActionOpensLink } from "@utils/types/feed/action";
import Link from "next/link";

const ActionGoesToPage = ({ action }: { action: ActionOpensLink }) => {
  return (
    <Link href={action.url}>
      <a
        key={action.name}
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
    </Link>
  );
};

export default ActionGoesToPage;
