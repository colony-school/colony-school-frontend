// Modules
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import MaterialIcon from "@components/global/icon/material";

// Types
import { NavItem, NavGroup } from "@utils/types/navigation";

/**
 * A skip to navigation button that only displays when it gains focus
 */
const SkipNavigation = (): JSX.Element => (
  <a
    aria-labelledby="nav-p-skip"
    href="#main-content"
    className="sr-only focus:not-sr-only "
  >
    <div
      className="flex flex-row gap-3 items-center px-6 py-4 rounded-full
      bg-light-tertiary-container dark:bg-dark-tertiary-container"
    >
      <MaterialIcon
        icon="skip_next"
        className="text-light-tertiary dark:text-dark-tertiary"
      />
      <p id="nav-p-skip">Skip Navigation</p>
    </div>
  </a>
);

/**
 * A nav item with hover and active. Only active when the client URL is the same with item URL.
 */
const Item = ({
  item,
  active,
}: {
  item: NavItem;
  active: boolean;
}): JSX.Element => (
  <Link href={item.url}>
    <a
      aria-current="page"
      aria-labelledby={`nav-${item.url}`}
      className={`flex flex-row gap-3 items-center px-6 py-4 rounded-full  group
        ${
          active
            ? "bg-light-secondary-container dark:bg-dark-secondary-container transition-all \
              hover:shadow focus:shadow"
            : "transition-colors hover:bg-light-tertiary-container hover:dark:bg-dark-tertiary-container hover:transition-none \
              focus:bg-light-tertiary-container focus:dark:bg-dark-tertiary-container focus:transition-none"
        }`}
    >
      <div
        className={`flex transition-colors ${
          active
            ? "text-light-secondary dark:text-dark-secondary"
            : "text-light-primary dark:text-dark-primary"
        } group-hover:text-light-tertiary group-hover:dark:text-dark-tertiary group-hover:transition-none
          group-focus:text-light-tertiary group-focus:dark:text-dark-tertiary group-focus:transition-none`}
      >
        {item.icon}
      </div>
      <p id={`nav-${item.url}`}>{item.name}</p>
    </a>
  </Link>
);

const Group = ({
  group,
  path,
}: {
  group: NavGroup;
  path: string;
}): JSX.Element => (
  <div
    key={group.name}
    className="border-b-2 border-b-light-outline last:border-none dark:border-b-dark-outline"
  >
    <h2 className="p-4 font-bold font-light-on-surface-variant dark:font-dark-on-surface-variant">
      {group.name}
    </h2>
    {group.items.map((item) => {
      return <Item item={item} active={path == item.url} key={item.name} />;
    })}
  </div>
);

/**
 * The menu
 * @param items List of nav items, each containes name and URL
 */
const NavDrawer = ({ groups }: { groups: Array<NavGroup> }): JSX.Element => {
  // Removes queries (?) and fragments (#)
  const path = useRouter().asPath.split(/\?|#/)[0];

  return (
    <div className="flex flex-col p-3 h-screen bg-light-surface1 overflow-auto scroll-invisible dark:bg-dark-surface1">
      <div
        aria-hidden="true"
        role="presentation"
        className="flex flex-row items-center gap-2 font-display font-bold text-5xl p-4"
      >
        <div className="relative w-9 h-9">
          <Image
            src="/images/brand/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Colony logo"
          />
        </div>
        <p>School</p>
      </div>
      <SkipNavigation />
      <nav>
        {groups.map((group) => {
          return <Group group={group} path={path} key={group.name} />;
        })}
      </nav>
    </div>
  );
};

// Exports
export default NavDrawer;
