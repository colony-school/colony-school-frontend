// Components
import AnnouncementAttachment from "@components/feed/attachment/announcement";
import AssignmentAttachment from "@components/feed/attachment/assignment";
import FileAttachment from "@components/feed/attachment/file";
import PeriodSwapAttachment from "@components/feed/attachment/period-swap";
import SlidesAttachment from "@components/feed/attachment/slides";
import SubjectPeriodAttachment from "@components/feed/attachment/subject-period";

// Utils
import { Attachment } from "@utils/types/post";
import PaymentAttachment from "./payment";

/**
 * The bridge to all post attachments
 * @param attachments List of attachments
 */
const PostAttachments = ({
  attachments,
}: {
  attachments: Array<Attachment>;
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {attachments.map((attachment) => {
        switch (attachment.type) {
          case "announcement":
            return (
              <AnnouncementAttachment announcement={attachment.announcement} />
            );
          case "assignment":
            return <AssignmentAttachment assignment={attachment.assignment} />;
          case "subject-period":
            return (
              <SubjectPeriodAttachment
                subjectPeriod={attachment.subjectPeriod}
              />
            );
          case "period-swap":
            return <PeriodSwapAttachment periods={attachment.periods} />;
          case "file":
            return (
              <FileAttachment
                file={attachment.file}
                usePolicies={attachment.usePolicies}
              />
            );
          case "slides":
            return (
              <SlidesAttachment
                name={attachment.name}
                slides={attachment.slides}
              />
            );
          case "payment":
            return (
              <PaymentAttachment
                name={attachment.name}
                totalOwed={attachment.totalOwed}
                perPersonOwed={attachment.perPersonOwed}
                unpaidPeople={attachment.unpaidPeople}
              />
            );
        }
      })}
    </ul>
  );
};

export default PostAttachments;
