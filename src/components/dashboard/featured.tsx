// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";

// Types
import { FeaturedItem } from "@utils/types/featured";

/**
 * A featured item, for Featured Card (`Featured` from `featured.tsx`)
 * 
 * You have to pay to get one
 * @param name The title of what is being featured
 * @param desc The description of what is being featured
 * @param actions A list of actions you can take, an action has 3 types: "primary," "secondary," and "tertiary"
 */
const FeaturedItem = ({
  name,
  desc,
  actions,
}: {
  name: string;
  desc: string;
  actions: Array<{
    name: string;
    type?: "primary" | "secondary" | "tertiary";
    url: string;
  }>;
}): JSX.Element => {
  return (
    <li className="flex flex-col gap-4 p-4" key={name}>
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-base">{desc}</p>
      </div>
      <div className="flex flex-row-reverse gap-2">
        {actions.map((action) => (
          <a
            className={`block btn
              ${(action.type == "primary" || !action.type) && "btn-filled"}
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

/**
 * The Featured Card, the only way we can make money
 * @param featuredItems A list of featured items
 */
const Featured = ({ featuredItems }: { featuredItems: Array<FeaturedItem> }): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <MaterialIcon
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
