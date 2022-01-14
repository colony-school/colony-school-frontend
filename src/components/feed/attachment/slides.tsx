// Modules
import Image from "next/image";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

const SlidesAttachment = ({
  name,
  slides,
}: {
  name: string;
  slides: Array<string>;
}): JSX.Element => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 md:items-start container-tertiary">
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
      <div className="flex flex-row">
        <div className="w-full p-2 scroll-1 scroll-tertiary overflow-auto">
          <ul className="flex flex-row gap-2 w-fit h-24">
            {slides.map((slide, index) => {
              return (
                <li
                  className="relative h-full aspect-square bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden"
                  key={index}
                >
                  <Image
                    src={slide}
                    layout="fill"
                    objectFit="cover"
                    alt={`Slide ${index + 1}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
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
