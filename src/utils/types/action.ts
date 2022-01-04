export type Action = {
  name: string;
  type?: "primary" | "secondary" | "tertiary";
  url: string;
};
