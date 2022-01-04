// Modules
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Types
import { NavItem, NavGroup } from "@utils/types/navigation";

/**
 * A nav item with hover and active. Only active when the client URL is the same with item URL.
 */
const Item = ({ item }: { item: NavItem }): JSX.Element => {
  const path = useRouter().asPath;

  return (
    <Link href={item.url}>
      <a
        className={`flex flex-row gap-3 items-center px-6 py-4 rounded-full group transition-colors
        hover:bg-light-tertiary-container hover:dark:bg-dark-tertiary-container hover:transition-none
        ${
          path == item.url &&
          "bg-light-secondary-container dark:bg-dark-secondary-container"
        }`}
      >
        <div
          className={`flex transition-colors ${
            path == item.url
              ? "text-light-secondary dark:text-dark-secondary"
              : "text-light-primary dark:text-dark-primary"
          } group-hover:text-light-tertiary group-hover:dark:text-dark-tertiary group-hover:transition-none`}
        >
          {item.icon}
        </div>
        <p>{item.name}</p>
      </a>
    </Link>
  );
};

const Group = ({ group }: { group: NavGroup }): JSX.Element => {
  return (
    <div
      key={group.name}
      className="border-b-2 border-b-light-outline last:border-none dark:border-b-dark-outline"
    >
      <h2 className="p-4 font-bold font-light-on-surface-variant dark:font-dark-on-surface-variant">
        {group.name}
      </h2>

      {group.items.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </div>
  );
};

/**
 * The menu
 * @param items List of nav items, each containes name and URL
 */
const NavDrawer = ({ groups }: { groups: Array<NavGroup> }): JSX.Element => {
  return (
    <nav className="flex flex-col p-3 h-screen bg-light-surface1 overflow-auto scroll-invisible dark:bg-dark-surface1">
      <div className="flex flex-row items-center gap-2 font-extrabold text-4xl p-4">
        <div className="relative w-9 h-9">
          <Image
            src="/images/brand/logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p>School</p>
        <h1 className="sr-only">Colony School</h1>
      </div>

      {groups.map((group) => {
        return <Group group={group} key={group.name} />;
      })}
    </nav>
  );
};

// Exports
export default NavDrawer;
