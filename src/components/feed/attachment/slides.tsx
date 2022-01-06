import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import Image from "next/image";

const SlidesAttachment = ({
  name,
  slides,
}: {
  name: string;
  slides: Array<string>;
}): JSX.Element => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 md:items-start bg-light-tertiary-container dark:bg-dark-tertiary-container">
      <Title
        icon={
          <MaterialIcon
            icon="photo_library"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="text-lg">Slides: {name}</h4>}
        subhead={`${slides.length} pictures`}
      />
      <div className="flex flex-row h-28">
        <ul className="flex flex-row gap-2 w-full p-2 scroll-invisible overflow-auto">
          {slides.map((slide) => {
            return (
              <li className="relative h-full aspect-square bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden">
                <Image src={slide} layout="fill" />
              </li>
            );
          })}
        </ul>
        <button className="btn-text grid place-items-center">
          <MaterialIcon
            icon="chevron_right"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        </button>
      </div>
    </li>
  );
};

export default SlidesAttachment;
