// Modules
import { ReactNode } from "react";

// Components
import Menu from "@components/layout/menu";
import NavBar from "./nav-bar";

// Data
import { navItems } from "./items";
import TopAppBar from "./top-app-bar";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  // return (
  //   <div className="flex flex-col justify-between h-screen overflow-hidden sm:grid sm:grid-cols-[auto_auto] md:h-fit md:flex md:flex-row lg:grid lg:grid-cols-[2fr_6fr]">
  //     <Menu />
  //     <main className="h-48 w-full">
  //       {children}
  //     </main>
  //     <div className="sm:hidden">
  //       <NavBar items={navItems} />
  //     </div>
  //   </div>
  // );
  return (
    <div
      className="flex flex-col justify-between h-screen overflow-hidden
        sm:flex sm:flex-row sm:h-fit 
        lg:grid lg:grid-cols-[2fr_6fr]"
    >
      <div className="w-fit lg:w-full">
        <div className="sm:hidden">
          <TopAppBar />
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
