// Types
import { ActionTriggersFunction as ActionTriggersFunctionType } from "@utils/types/feed/action";

// Utils
import { actionClassName } from "@utils/action";

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
      className={actionClassName(action.importance)}
      onClick={() => action.onClick()}
    >
      {action.icon}
      {action.name}
    </button>
  );
};

export default ActionTriggersFunction;
