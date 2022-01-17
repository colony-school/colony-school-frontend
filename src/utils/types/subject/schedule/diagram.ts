// Types from other files
import { Time } from "@utils/types/date";

export type ScheduleDiagram = {
  scheduleStart: Time;
  content: Array<ScheduleDiagramWeek>;
};

export type ScheduleDiagramWeek = {
  weekDate: Date;
  content: Array<ScheduleDiagramItem>;
};

export type ScheduleDiagramItem = {
  id: number;
  periodStart: Time;
  periodLength: number;
  relevant?: boolean;
};
