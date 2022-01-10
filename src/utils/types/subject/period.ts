// Types from other files
import { Assignment } from "@utils/types/assignment";
import { Subject } from "@utils/types/subject";

/**
 * A class period in a time schedule, not to be confused with the subject itself
 */
export type SubjectPeriod = {
  periodStart: Date;
  periodLength: number;
  assignmentsDue: Array<Assignment>;
  subject: Subject;
};
