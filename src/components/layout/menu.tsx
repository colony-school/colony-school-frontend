// Modules
import Link from "next/link";

// Types
type Group = {
  name: string,
  items: Array<{
    name: string,
    url: string
  }>
}

/**
 * The menu
 * @param items List of nav items, each containes name and URL
 */
const Menu = ({ groups }: { groups: Array<Group> }): JSX.Element => {
  return (
    <nav>
      {groups.map(group => {
        return (
          <div>
            <p>{group.name}</p>
            {group.items.map(item => {
              return (
                <Link href={item.url}>
                  <a className="block">
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        );
      })}
    </nav>
  )
}

// Exports
export default Menu;