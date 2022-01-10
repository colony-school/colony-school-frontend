// Types from other files
import { Time } from "@utils/types/date";
import { Subject } from "@utils/types/subject";

export type Schedule = {
  scheduleStart: Time;
  content: Array<ScheduleWeek>;
};

export type ScheduleWeek = {
  weekDate: Date;
  content: Array<ScheduleItem>;
};

export type ScheduleItem = {
  periodStart: Time;
  periodLength: number;
  subject: Subject;
};
