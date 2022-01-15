// Types
import { ActionTriggersFunction as ActionTriggersFunctionType } from "@utils/types/feed/action";

/**
 * This action triggers a function
 * @param action An action object
 */
const ActionTriggersFunction = ({
  action,
}: {
  action: ActionTriggersFunctionType;
}) => {
  return (
    <button
      key={action.name}
      className={`btn ${
        action.importance == 1
          ? "btn-filled"
          : action.importance == 2
          ? "btn-outlined"
          : action.importance == 3 && "btn-text"
      }`}
      onClick={() => action.onClick()}
    >
      {action.icon}
      {action.name}
    </button>
  );
};

export default ActionTriggersFunction;
