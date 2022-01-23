// Types
import { Attachment } from "@utils/types/feed/post";

// Utils
import { renderAttachmentNames } from "@utils/attachment";

/**
 * Renders a summary of attachments
 * @param attachments An array of attachments
 */
const PostTitle = ({ attachments }: { attachments: Array<Attachment> }) => {
  // Creates a list of attachment types that exist in the given attachments array
  const attachmentTypes = attachments.map((attachment) => attachment.type);

  // Renders a unique way of packaging attachment information for each attachment type
  const getTitleText = (attachments: Array<Attachment>) => {
    if (attachmentTypes.includes("period-swap")) {
      const periodsSwapped =
        attachments
          .map((attachment) =>
            attachment.type == "period-swap" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.periods || [];
      if (periodsSwapped.length == 2) {
        return `${periodsSwapped[0].subject.enName.shortName} is swapped with 
          ${periodsSwapped[1].subject.enName.shortName}`;
      } else {
        return <h3 className="font-display">Periods Swapped</h3>;
      }
    } else if (attachmentTypes.includes("slides")) {
      return `Material about ${
        attachments
          .map((attachment) =>
            attachment.type == "slides" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.subject.enName.name ||
        "a Subject"
      }`;
    } else if (attachmentTypes.includes("payment")) {
      if (attachments.length > 1) {
        return `Payment about ${renderAttachmentNames(attachments)}`;
      } else {
        return "Distributed Payment";
      }
    } else if (attachmentTypes.includes("file")) {
      if (attachments.length > 1) {
        return `File about ${renderAttachmentNames(attachments)}`;
      } else {
        return "Attached File";
      }
    } else if (attachmentTypes.includes("announcement")) {
      return `Post about ${
        attachments
          .map((attachment) =>
            attachment.type == "announcement" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.announcement.title ||
        "an announcement"
      }`;
    } else if (attachmentTypes.includes("assignment")) {
      return `Post about ${
        attachments
          .map((attachment) =>
            attachment.type == "assignment" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.assignment.name ||
        "an assignment"
      }`;
    } else if (attachments.length > 0) {
      return `Post about ${renderAttachmentNames(attachments)}`;
    } else {
      return "Post";
    }
  };

  return (
    <h3 className="font-display">{getTitleText(attachments) || "Post"}</h3>
  );
};

// Exports
export default PostTitle;
