const Title = ({
  icon,
  title,
  subhead,
  noPadding,
  className,
}: {
  icon: JSX.Element;
  title: JSX.Element;
  subhead?: string;
  noPadding?: boolean;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-row items-center gap-4 ${
        noPadding ? "" : "py-3 px-4"
      } ${className}`}
    >
      {icon}
      <div className="text-xl font-medium">
        {title}
        <p className="text-base font-normal max-lines-1">{subhead}</p>
      </div>
    </div>
  );
};

export default Title;
