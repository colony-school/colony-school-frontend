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
  if (attachmentTypes.includes("period-swap")) {
    const periodsSwapped =
      attachments
        .map((attachment) =>
          attachment.type == "period-swap" ? attachment : null
        )
        .filter((attachment) => attachment)[0]?.periods || [];
    if (periodsSwapped.length == 2) {
      return (
        <h3>
          {periodsSwapped[0].subject.enName.shortName}
          {" is swapped with "}
          {periodsSwapped[1].subject.enName.shortName}
        </h3>
      );
    } else {
      return <h3>Periods Swapped</h3>;
    }
  } else if (attachmentTypes.includes("slides")) {
    return (
      <h3>
        Material about{" "}
        {attachments
          .map((attachment) =>
            attachment.type == "slides" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.subject.enName.name ||
          "a Subject"}
      </h3>
    );
  } else if (attachmentTypes.includes("payment")) {
    if (attachments.length > 1) {
      return <h3>Payment about {renderAttachmentNames(attachments)}</h3>;
    } else {
      return <h3>Distributed Payment</h3>;
    }
  } else if (attachmentTypes.includes("file")) {
    if (attachments.length > 1) {
      return <h3>File about {renderAttachmentNames(attachments)}</h3>;
    } else {
      return <h3>Attached File</h3>;
    }
  } else if (attachmentTypes.includes("announcement")) {
    return (
      <h3>
        Post about{" "}
        {attachments
          .map((attachment) =>
            attachment.type == "announcement" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.announcement.title ||
          "an announcement"}
      </h3>
    );
  } else if (attachmentTypes.includes("assignment")) {
    return (
      <h3>
        Post about{" "}
        {attachments
          .map((attachment) =>
            attachment.type == "assignment" ? attachment : null
          )
          .filter((attachment) => attachment)[0]?.assignment.name ||
          "an assignment"}
      </h3>
    );
  } else if (attachments.length > 0) {
    return <h3>Post about {renderAttachmentNames(attachments)}</h3>;
  } else {
    return <h3>Post</h3>;
  }
};

// Exports
export default PostTitle;
