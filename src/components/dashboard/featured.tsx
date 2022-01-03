// Components
import Title from "@components/global/title";
import Icon from "@components/global/icon";

const FeaturedItem = ({
  name,
  desc,
  actions,
}: {
  name: string;
  desc: string;
  actions: Array<{
    name: string;
    type: "primary" | "secondary" | "tertiary";
    url: string;
  }>;
}): JSX.Element => {
  return (
    <li className="flex flex-col gap-4 p-4" key={name}>
      <div>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
      <div className="flex flex-row-reverse gap-2">
        {actions.map((action) => (
          <a
            className={`block btn
              ${action.type == "primary" && "btn-filled"}
              ${action.type == "secondary" && "btn-tonal"}
              ${action.type == "tertiary" && "btn-text"}
            `}
            href={action.url}
            target="_blank"
            key={action.name}
          >
            {action.name}
          </a>
        ))}
      </div>
    </li>
  );
};

const Featured = (): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <Icon
            icon="featured_video"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3>Featured</h3>}
      />
      <ul>
        <FeaturedItem
          name="Get your Pfizer shot"
          desc="Pfizer shots are now available for registeration"
          actions={[
            {
              name: "Register",
              type: "primary",
              url: "https://youtu.be/dQw4w9WgXcQ",
            },
          ]}
        />
        <FeaturedItem
          name="Join the Imsad Club!"
          desc="We can be Im and be sad together at the Imsad club!"
          actions={[
            {
              name: "Register",
              type: "primary",
              url: "https://imsad.dev/contacts",
            },
            {
              name: "More info",
              type: "tertiary",
              url: "https://imsad.dev/about",
            },
          ]}
        />
      </ul>
    </section>
  );
};

export default Featured;
