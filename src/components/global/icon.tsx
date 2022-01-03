const Icon = ({ icon, className }: { icon: string, className?: string }) => (
  <i className={`material-icons ${className}`}>
    {icon}
  </i>
)

export default Icon;