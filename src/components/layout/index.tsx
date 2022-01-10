// Modules
import { ReactNode } from "react";

// Components
import Menu from "@components/layout/menu";
import NavBar from "@components/layout/nav-bar";
import TopAppBar from "@components/layout/top-app-bar";

// Data
import { navItems } from "@components/layout/pages";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div
      className="flex flex-col justify-between h-screen overflow-hidden
        sm:flex sm:flex-row sm:h-fit 
        lg:grid lg:grid-cols-[2fr_6fr]"
    >
      <div className="w-fit lg:w-full">
        <div className="w-screen sm:hidden z-1">
          <TopAppBar title="Colony School" />
        </div>
        <div className="hidden w-fit sm:block lg:w-full">
          <Menu />
        </div>
      </div>
      <div className="w-full h-full overflow-auto sm:h-screen">
        {children}
      </div>
      <div className="sm:hidden">
        <NavBar items={navItems} />
      </div>
    </div>
  );
};

export default Layout;
