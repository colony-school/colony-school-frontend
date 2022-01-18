const Title = ({
  icon,
  title,
  subhead,
  noPadding,
  gap,
  className,
}: {
  icon?: JSX.Element;
  title: JSX.Element;
  subhead?: string;
  noPadding?: boolean;
  gap?: number;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-row items-center gap-${gap || "4"}
        ${noPadding ? "" : "py-3 px-4"}
        ${className}`}
    >
      {icon}
      <div className="w-full text-xl font-medium">
        {title}
        <p className="w-full text-base font-normal max-lines-1">{subhead}</p>
      </div>
    </div>
  );
};

export default Title;
