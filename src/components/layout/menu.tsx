// Components
import NavDrawer from "@components/layout/nav-drawer";
import NavRail from "@components/layout/nav-rail";

// Data
import { navGroups, navItems } from "./items";

/**
 * A dynamic way of navigating depending on screen size
 */
const Menu = (): JSX.Element => {
  return (
    <>
      <div className="hidden lg:block">
        <NavDrawer groups={navGroups} />
      </div>
      <div className="hidden sm:block lg:hidden">
        <NavRail items={navItems} />
      </div>
    </>
  );
};

export default Menu;
