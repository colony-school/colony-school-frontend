// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";

// Types
import { FeaturedItem as FeaturedItemType } from "@utils/types/featured";
import { Action } from "@utils/types/action";

/**
 * A featured item, for Featured Card (`Featured` from `featured.tsx`)
 *
 * You have to pay to get one
 *
 * ---
 * The following is under the object `featuredItem`
 * @param name The title of what is being featured
 * @param desc The description of what is being featured
 * @param actions A list of actions you can take, an action has 3 types: "primary," "secondary," and "tertiary"
 */
const FeaturedItem = ({
  featuredItem,
}: {
  featuredItem: FeaturedItemType;
}): JSX.Element => {
  return (
    <li className="flex flex-col gap-4 p-4" key={featuredItem.name}>
      <div>
        <h4 className="font-bold text-lg">{featuredItem.name}</h4>
        <p className="text-base">{featuredItem.desc}</p>
      </div>
      <div className="flex flex-row-reverse gap-2">
        {featuredItem.actions.map((action) => (
          <a
            className={`block btn
              ${(action.type == "primary" || !action.type) && "btn-filled"}
              ${action.type == "secondary" && "btn-tonal"}
              ${action.type == "tertiary" && "btn-text"}
            `}
            href={action.url}
            target="_blank"
            rel="noreferrer"
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
const Featured = ({
  featuredItems,
}: {
  featuredItems: Array<FeaturedItemType>;
}): JSX.Element => {
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
        {featuredItems.map((featuredItem) => {
          return <FeaturedItem featuredItem={featuredItem} key={featuredItem.name} />;
        })}
      </ul>
    </section>
  );
};

export default Featured;
