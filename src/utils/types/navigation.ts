/**
 * An item for navigation
 * 
 * For all navigations
 */
export type NavItem = {
  name: string;
  icon: JSX.Element;
  url: string;
};

/**
 * An group of navigation items
 * 
 * For Navigation Drawers (`NavDrawer` from `nav-drawer.tsx`)
 */
export type NavGroup = {
  name: string;
  items: Array<NavItem>;
};