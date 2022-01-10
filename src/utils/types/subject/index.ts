// Types from other files
import { Instructor } from "@utils/types/people";

export type Subject = {
  codes: {
    enCode?: string;
    thCode?: string;
  };
  localName: {
    name: string;
    shortName: string;
  };
  enName: {
    name: string;
    shortName: string;
  };
  altNames: Array<string>;
  instructors: Array<Instructor>;
};
