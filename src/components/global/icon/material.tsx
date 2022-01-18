const MaterialIcon = ({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) => (
  <i
    aria-hidden="true"
    className={`material-icons ${className || ""}`}
    translate="no"
  >
    {icon}
  </i>
);

export default MaterialIcon;
