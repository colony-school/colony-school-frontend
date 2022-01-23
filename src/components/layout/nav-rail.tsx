// Modules
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavItem } from "@utils/types/navigation";

/**
 * An item in the navigation rail
 */
const NavRailItem = ({
  item,
  active,
}: {
  item: NavItem;
  active: boolean;
}): JSX.Element => (
  <Link href={item.url} key={item.name}>
    <a
      className="flex flex-col justify-center items-center gap-1 p-2 h-20 group
        focus-visible:bg-light-primary-0.12-tlc focus-visible:dark:bg-dark-primary-0.12-tlc"
    >
      <div
        className={`flex flex-row items-center py-2 px-6
        text-light-on-surface-variant dark:text-dark-on-surface-variant
          rounded-full ${
            active
              ? "text-light-tertiary bg-light-secondary-container dark:text-dark-tertiary \
                dark:bg-dark-secondary-container \
                transition-shadow group-hover:shadow \
                group-focus:shadow-none"
              : "bg-transparent transition-colors group-hover:text-light-tertiary \
                group-hover:dark:text-dark-tertiary group-hover:bg-light-tertiary-container \
                group-hover:dark:bg-dark-tertiary-container group-hover:transition-none"
          }`}
      >
        {item.icon}
      </div>
      <div className={`${active || "h-0 overflow-hidden group-hover:h-fit"}`}>
        <p
          className={`font-bold text-sm text-light-on-surface-variant dark:text-dark-on-surface-variant
            ${active || "hidden group-hover:block"}`}
        >
          {item.name}
        </p>
      </div>
    </a>
  </Link>
);

/**
 * Provides access to primary destinations in apps when using tablet and desktop screens
 */
const NavRail = ({
  items,
}: {
  items: Array<{ name: string; icon: JSX.Element; url: string }>;
}) => {
  // Removes queries (?) and fragments (#)
  const path = useRouter().asPath.split(/\?|#/)[0];

  return (
    <nav
      className="flex flex-col items-center gap-1 w-fit h-screen p-1
        bg-light-surface1 dark:bg-dark-surface1 overflow-auto scroll-invisible"
    >
      <Link href="/">
        <a className="flex flex-col gap-1 items-center px-6 py-4">
          <div className="relative w-10 aspect-square">
            <Image
              src="/images/brand/logo.svg"
              layout="fill"
              alt="Colony logo"
            />
          </div>
          <p className="font-bold text-sm text-center text-light-primary dark:text-dark-primary">
            School
          </p>
          <h1 className="sr-only">Colony School</h1>
        </a>
      </Link>
      {items.map((item) => {
        return <NavRailItem item={item} active={path == item.url} />;
      })}
    </nav>
  );
};

export default NavRail;
