// Types from other files
import { Announcement } from "@utils/types/announcement";
import { Assignment } from "@utils/types/assignment";
import { SubjectPeriod } from "@utils/types/subject";

export type Post = {
  author: string;
  postDate: Date;
  content: string;
  attachments: Array<Attachment>;
};

export type Attachment =
  | AnnouncementAttachment
  | AssignmentAttachment
  | SubjectPeriodAttachment
  | PeriodSwapAttachment
  | PaymentAttachement
  | FileAttachment;

// Blue: Events and Announcements
export type AnnouncementAttachment = {
  type: "announcement";
  announcement: Announcement;
};

export type AssignmentAttachment = {
  type: "assignment";
  assignment: Assignment;
}

// Yellow: Period and Payment
export type SubjectPeriodAttachment = {
  type: "subject-period";
  subjectPeriod: SubjectPeriod;
};

export type PeriodSwapAttachment = {
  type: "period-swap";
  periods: Array<SubjectPeriod>;
};

export type PaymentAttachement = {
  type: "payment";
  name: string;
  totalOwed: number;
  perPersonOwed: number;
  unpaid: Array<string>;
}

// Orange: Files
export type FileAttachment = {
  type: "file";
  file: File;
  usePolicies: FileAttachmentUsePolicies;
};

export type FileAttachmentUsePolicies = {
  noParaphrase: boolean;
  noCopy: boolean;
  noShare: boolean;
};