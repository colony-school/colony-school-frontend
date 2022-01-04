// Modules
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * A persistent and convenient way to switch between primary destinations
 */
const NavBar = ({
  items,
}: {
  items: Array<{ name: string; icon: JSX.Element; url: string }>;
}): JSX.Element => {
  const path = useRouter().asPath;

  return (
    <nav className="flex flex-row justify-between p-2 bg-light-surface2 dark:bg-dark-surface2 shadow">
      {items.map((item) => (
        <Link href={item.url} key={item.name}>
          <a className="flex flex-col items-center px-2 py-1 w-full">
            <div
              className={`flex flex-row justify-center py-1 rounded-full
              ${path === item.url && "w-full bg-light-secondary-container dark:bg-dark-secondary-container"} `}
            >
              {item.icon}
            </div>
            <p className="text-xs text-center">{item.name}</p>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
