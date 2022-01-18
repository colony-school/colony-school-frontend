const Headline = ({
  icon,
  title,
  subhead,
  noPadding,
  gap,
  className,
}: {
  icon: JSX.Element;
  title?: JSX.Element;
  subhead?: JSX.Element;
  noPadding?: boolean;
  gap?: number;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-row gap-${gap || "2"}
        ${noPadding ? "" : "p-4"}
        ${className || ""}`}
    >
      {icon}
      <div>
        {title}
        {subhead}
      </div>
    </div>
  );
};

export default Headline;
