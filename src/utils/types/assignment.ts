export type Assignment = {
  id: number;
  name: string;
  desc: string;
  subject: string;
  due: Date;
  status: "not-started" | "started" | "done";
  urgent: boolean;
};
