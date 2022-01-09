// Types from other files
import { SubjectPeriod } from "@utils/types/subject";

export type Schedule = {
  scheduleStartTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  content: Array<ScheduleWeek>;
};

export type ScheduleWeek = {
  weekDate: Date;
  content: Array<SubjectPeriod>;
};
