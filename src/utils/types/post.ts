// Types from other files
import { Announcement } from "@utils/types/announcement";
import { Assignment } from "@utils/types/assignment";
import { File } from "@utils/types/file";
import { SubjectPeriod } from "@utils/types/subject/period";

export type Post = {
  author: string;
  postDate: Date;
  content: string;
  attachments: Array<Attachment>;
};

export type MinifiedPost = {
  author: string;
  postDate: Date;
  attachments: Array<Attachment>;
}

export type Attachment =
  | AnnouncementAttachment
  | AssignmentAttachment
  | SubjectPeriodAttachment
  | PeriodSwapAttachment
  | PaymentAttachement
  | FileAttachment
  | SlidesAttachment;

// Blue: Events and Announcements
export type AnnouncementAttachment = {
  type: "announcement";
  announcement: Announcement;
};

export type AssignmentAttachment = {
  type: "assignment";
  assignment: Assignment;
};

// Yellow: Period and Payment
export type SubjectPeriodAttachment = {
  type: "subject-period";
  subjectPeriod: SubjectPeriod;
};

export type PeriodSwapAttachment = {
  type: "period-swap";
  periods: [SubjectPeriod, SubjectPeriod];
};

export type PaymentAttachement = {
  type: "payment";
  name: string;
  totalOwed: number;
  perPersonOwed: number;
  unpaidPeople: Array<string>;
  unpaid: boolean;
};

// Orange: Files
export type FileAttachment = {
  type: "file";
  file: File;
  usePolicies: Array<FileAttachmentUsePolicy>;
};

export type FileAttachmentUsePolicy = {
  id: number;
  icon?: string;
  name: string;
  summary: string;
  desc?: string;
};

export type SlidesAttachment = {
  type: "slides";
  name: string;
  slides: Array<string>;
};
