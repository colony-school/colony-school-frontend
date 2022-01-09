// Types from other files
import { Instructor } from "@utils/types/people";

export type Subject = {
  name: string;
  instructors: Array<Instructor>;
};
