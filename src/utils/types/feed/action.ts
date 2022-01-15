export type ActionTriggersFunction = {
  type: "function";
  name: string;
  icon?: JSX.Element;
  importance: 1 | 2 | 3;
  onClick: Function;
};

export type ActionOpensLink = {
  type: "link";
  name: string;
  icon?: JSX.Element;
  importance: 1 | 2 | 3;
  url: string;
  external?: boolean;
};