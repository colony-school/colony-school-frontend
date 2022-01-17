// Types
import { Attachment } from "@utils/types/feed/post";

/**
 * Renders an array of attachments into a string
 * @param attachments An array of attachments
 * @returns A string of a comma-seperated list of attachment
 */
export function renderAttachmentNames(attachments: Array<Attachment>) {
  return attachments
    .map((attachment) => {
      switch (attachment.type) {
        case "announcement":
          return attachment.announcement.title;
        case "assignment":
          return attachment.assignment.name;
        case "subject-period":
          return attachment.subjectPeriod.subject.enName.shortName;
      }
    })
    .filter((attachment) => attachment)
    .join(", ");
}
