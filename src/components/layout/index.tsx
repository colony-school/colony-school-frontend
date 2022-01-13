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
        <div className="fixed top-0 w-screen z-30 sm:hidden">
          <TopAppBar title="Colony School" />
        </div>
        <div className="hidden w-fit sm:block lg:w-full z-30">
          <Menu />
        </div>
      </div>
      <div className="py-16 w-full h-full overflow-auto sm:p-0 sm:h-screen">
        {children}
      </div>
      <div className="fixed bottom-0 w-screen z-30 sm:hidden">
        <NavBar items={navItems} />
      </div>
    </div>
  );
};

export default Layout;
