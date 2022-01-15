// Types
import { Attachment } from "@utils/types/post";

/**
 * Displays actions according to attachments
 * @param attachments An array of attachments
 */
const PostActions = ({
  attachments,
}: {
  attachments: Array<Attachment>;
}): JSX.Element => {
  // Initiate an empty array of actions
  let actions: Array<{
    name: string;
    importance: 1 | 2 | 3;
    onClick?: Function | string; // onClick will be mandatory in the future
  }> = [];

  // Loop through each action to determine what actions are available for this post
  for (let attachment of attachments) {
    if (attachment.type == "announcement") {
      actions.push({
        name: `View ${attachment.announcement.type}`,
        importance: 1,
      });
    } else if (attachment.type == "file") {
      actions.push({
        name: "Download",
        importance: 1,
      });
    } else if (attachment.type == "payment") {
      actions.push({
        name: `Pay ฿${attachment.perPersonOwed.toFixed(2)}`,
        importance: 1,
      });
    } else if (attachment.type == "period-swap") {
      actions.push({
        name: "Dispute",
        importance: 2,
      });
    } else if (attachment.type == "slides") {
      actions = actions.concat([
        {
          name: "See all slides",
          importance: 1,
        },
        {
          name: "Contribute slides",
          importance: 2,
        },
      ]);
    }
  }

  // Ensure the most important action is on the right
  actions.sort((a, b) => b.importance - a.importance);

  // Maps the array into buttons
  return (
    <div className="flex flex-row justify-end gap-2 p-4">
      <button className="btn btn-text">Open in Sidebar</button>
      {actions.map((action) => (
        <button
          className={`btn ${
            action.importance == 1
              ? "btn-filled"
              : action.importance == 2
              ? "btn-outlined"
              : action.importance == 3 && "btn-text"
          }`}
        >
          {action.name}
        </button>
      ))}
    </div>
  );
};

// Exports
export default PostActions;
