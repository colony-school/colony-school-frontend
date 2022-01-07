import { Action } from "@utils/types/action";

/**
 * A short representation of an announcement or event from school
 *
 * For At-a-glance Annoucement (`Announcement` from `announcements.tsx`)
 */
export type GlanceAnnouncement = {
  id: number;
  name: string;
  desc: string;
  postDate: Date;
  source: string;
};

/**
 * An announcement or event from school
 *
 * For Events and Announcements (list in `Events` from `events.tsx`)
 */
export type ListedAnnouncement = {
  id: number;
  title: string;
  type: "announcement" | "event";
  postDate: Date;
  image?: string;
};

/**
 * An announcement or event from school
 *
 * For Events and Announcements (card in `Events` from `events.tsx`)
 */
export type Announcement = {
  id: number;
  title: string;
  type: "announcement" | "event";
  desc: string;
  postDate: Date;
  source: string;
  image?: string;
  eventStart?: Date;
  periodStart?: number;
  eventEnd?: Date;
  periodEnd?: number;
  location?: string;
  actions?: Array<Action>;
};
