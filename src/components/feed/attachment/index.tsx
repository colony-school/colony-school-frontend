// Components
import AnnouncementAttachment from "@components/feed/attachment/announcement";
import AssignmentAttachment from "@components/feed/attachment/assignment";
import InvalidAttachment from "@components/feed/attachment/invalid";
import FileAttachment from "@components/feed/attachment/file";
import PaymentAttachment from "@components/feed/attachment/payment";
import PeriodSwapAttachment from "@components/feed/attachment/period-swap";
import SlidesAttachment from "@components/feed/attachment/slides";
import SubjectPeriodAttachment from "@components/feed/attachment/subject-period";

// Utils
import { Attachment } from "@utils/types/feed/post";

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
      {attachments.map((attachment, index) => {
        switch (attachment.type) {
          case "announcement":
            return (
              <AnnouncementAttachment
                announcement={attachment.announcement}
                key={index}
              />
            );
          case "assignment":
            return (
              <AssignmentAttachment
                assignment={attachment.assignment}
                key={index}
              />
            );
          case "subject-period":
            return (
              <SubjectPeriodAttachment
                subjectPeriod={attachment.subjectPeriod}
                relevantSchedule={attachment.relevantSchedule}
                key={index}
              />
            );
          case "period-swap":
            return (
              <PeriodSwapAttachment
                periods={attachment.periods}
                relevantSchedule={attachment.relevantSchedule}
                key={index}
              />
            );
          case "file":
            return (
              <FileAttachment
                file={attachment.file}
                usePolicies={attachment.usePolicies}
                key={index}
              />
            );
          case "slides":
            return (
              <SlidesAttachment
                name={attachment.name}
                slides={attachment.slides}
                key={index}
              />
            );
          case "payment":
            return (
              <PaymentAttachment
                name={attachment.name}
                totalOwed={attachment.totalOwed}
                perPersonOwed={attachment.perPersonOwed}
                unpaidPeople={attachment.unpaidPeople}
                key={index}
              />
            );
          default:
            return <InvalidAttachment />;
        }
      })}
    </ul>
  );
};

export default PostAttachments;
