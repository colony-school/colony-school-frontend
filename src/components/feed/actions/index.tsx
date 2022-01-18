// Components
import ActionTriggersFunction from "@components/feed/actions/triggers-function";
import ActionGoesToPage from "@components/feed/actions/goes-to-page";
import ActionOpensSite from "@components/feed/actions/opens-site";
import MaterialIcon from "@components/global/icon/material";

// Types
import { Attachment } from "@utils/types/feed/post";
import {
  ActionOpensLink,
  ActionTriggersFunction as ActionTriggersFunctionType,
} from "@utils/types/feed/action";

/**
 * Decides what type of action to render
 * @param action An action object
 */
const PostAction = ({
  action,
}: {
  action: ActionTriggersFunctionType | ActionOpensLink;
}): JSX.Element => {
  switch (action.type) {
    case "function":
      return <ActionTriggersFunction action={action} />;
    case "link":
      switch (action.external) {
        case true:
          return <ActionOpensSite action={action} />;
        default:
          return <ActionGoesToPage action={action} />;
      }
    default:
      return <div className="btn">Invalid</div>;
  }
};

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
  let actions: Array<ActionTriggersFunctionType | ActionOpensLink> = [];

  // Loop through each action to determine what actions are available for this post
  for (let attachment of attachments) {
    switch (attachment.type) {
      case "announcement":
        actions.push({
          type: "link",
          name: `View ${
            attachment.announcement.type == "announcement"
              ? "Announcement"
              : attachment.announcement.type == "event" && "Event"
          }`,
          icon:
            attachment.announcement.type == "announcement" ? (
              <MaterialIcon icon="mail" />
            ) : attachment.announcement.type == "event" ? (
              <MaterialIcon icon="event" />
            ) : undefined,
          importance: 1,
          url: `/events?id=${attachment.announcement.id}`,
        });
        break;

      case "file":
        actions.push({
          type: "link",
          name: "Download",
          icon: <MaterialIcon icon="download" />,
          importance: 1,
          url: attachment.file.url,
          external: true,
        });
        break;

      case "payment":
        actions.push({
          type: "function",
          name: `Pay ฿${attachment.perPersonOwed.toFixed(2)}`,
          icon: <MaterialIcon icon="payment" />,
          importance: 1,
          onClick: () => console.log("Paid!"),
        });
        break;

      case "period-swap":
        actions.push({
          type: "function",
          name: "Dispute",
          icon: <MaterialIcon icon="report" />,
          importance: 2,
          onClick: () => console.log("Dispute!"),
        });
        break;

      case "slides":
        actions = actions.concat([
          {
            type: "function",
            name: "See all Slides",
            icon: <MaterialIcon icon="photo_album" />,
            importance: 1,
            onClick: () => console.log("See all slides!"),
          },
          {
            type: "function",
            name: "Contribute Slides",
            icon: <MaterialIcon icon="add" />,
            importance: 2,
            onClick: () => console.log("Contribute slides!"),
          },
        ]);
        break;
    }
  }

  // Ensure the most important action is on the right
  actions.sort((a, b) => b.importance - a.importance);

  // Maps the array into buttons
  return (
    <div className="flex flex-row flex-wrap justify-end gap-2 p-4">
      <button className="btn btn-text">Open in Sidebar</button>
      {actions.map((action) => (
        <PostAction action={action} key={action.name} />
      ))}
    </div>
  );
};

// Exports
export default PostActions;
