const Headline = ({
  icon,
  title,
  subhead,
  className
}: {
  icon: JSX.Element;
  title?: JSX.Element;
  subhead?: JSX.Element;
  className?: string;
}): JSX.Element => {
  return (
    <div className={`flex flex-row gap-2 p-4 ${className}`}>
      {icon}
      <div>
        {title}
        {subhead}
      </div>
    </div>
  );
};

export default Headline;
