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
 */
export type Announcement = {
  id: number;
  title: string;
  type: "announcement" | "event";
  desc: string;
  postDate: Date;
  source: string;
  periodStart?: number;
  periodEnd?: number;
  location?: string;
};
