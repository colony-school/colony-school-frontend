import { ActionTriggersFunction as ActionTriggersFunctionType } from "@utils/types/feed/action";

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
      {action.name}
    </button>
  );
};

export default ActionTriggersFunction;
