const Monogram = ({ name }: { name: string }) => {
  return (
    <div
      className="grid place-items-center w-10 h-10 aspect-square
        text-light-on-secondary font-medium bg-light-secondary rounded-full [user-select:none]"
    >
      {name.length > 0 ? name[0].toUpperCase() : ":)"}
    </div>
  );
};

export default Monogram;
