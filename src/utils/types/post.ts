import { Announcement } from "./announcement";
import { SubjectPeriod } from "./subject";

export type Post = {
  author: string;
  postDate: Date;
  content: string;
  attachments: Array<Attachment>;
};

export type Attachment =
  | AnnouncementAttachment
  | SubjectPeriodAttachment
  | PeriodSwapAttachment
  | PaymentAttachement
  | FileAttachment;

// Blue: Events and Announcements
export type AnnouncementAttachment = {
  type: "announcement";
  event: Announcement;
};

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
  usePolicies: {
    noParaphrase: boolean;
    noCopy: boolean;
    noShare: boolean;
  };
};
