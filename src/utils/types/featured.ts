// Types from other files
import { Action } from "@utils/types/action";

export type FeaturedItem = {
  name: string;
  desc: string;
  actions: Array<Action>;
};
