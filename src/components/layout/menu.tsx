// Modules
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Types
type Item = {
  name: string;
  icon: string;
  url: string;
};

type Group = {
  name: string;
  items: Array<Item>;
};

/**
 * A nav item with hover and active. Only active when the client URL is the same with item URL.
 */
const Item = ({ item }: { item: Item }): JSX.Element => {
  return (
    <Link href={item.url} key={item.name}>
      <a
        className={`flex flex-row gap-3 items-center px-6 py-4 rounded-full
        hover:bg-light-tertiary-container dark:hover:bg-dark-tertiary-container
        ${
          useRouter().asPath == item.url &&
          "bg-light-secondary-container dark:bg-dark-secondary-container"
        }`}
      >
        <i className="material-icons" translate="no">
          {item.icon}
        </i>
        <p>{item.name}</p>
      </a>
    </Link>
  );
};

const Group = ({ group }: { group: Group }): JSX.Element => {
  return (
    <div
      key={group.name}
      className="border-b-2 border-b-light-outline last:border-none dark:border-b-dark-outline"
    >
      <h2 className="p-4 font-bold font-light-on-surface-variant dark:font-dark-on-surface-variant">
        {group.name}
      </h2>

      {group.items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

/**
 * The menu
 * @param items List of nav items, each containes name and URL
 */
const Menu = ({ groups }: { groups: Array<Group> }): JSX.Element => {
  return (
    <nav className="flex flex-col p-3 h-screen bg-light-surface1 overflow-auto scroll-invisible dark:bg-dark-surface1">
      <div className="flex flex-row items-center gap-2 font-extrabold text-4xl p-4">
        <div className="relative w-9 h-9">
          <Image src="/images/brand/logo.svg" layout="fill" objectFit="contain" />
        </div>
        <p>School</p>
        <h1 className="sr-only">Colony School</h1>
      </div>

      {groups.map((group) => {
        return <Group group={group} />;
      })}
    </nav>
  );
};

// Exports
export default Menu;
