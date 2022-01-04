// Types from other files
import { Instructor } from "@utypes/people";
import { Assignment } from "@utypes/assignment";

/**
 * A class period in a time schedule, not to be confused with the subject itself
 */
export type SubjectPeriod = {
  name: string,
  instructors: Array<Instructor>,
  periodStart: {
    hours: number,
    minutes: number,
    seconds: number
  },
  periodLength: number,
  assignmentsDue: Array<Assignment>
}