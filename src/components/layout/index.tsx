// Modules
import { ReactNode } from "react";

// Components
import Menu from "@components/layout/menu";
import NavBar from "./nav-bar";

// Data
import { navItems } from "./items";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col justify-between h-screen md:h-fit md:flex md:flex-row lg:grid lg:grid-cols-[2fr_6fr]">
      <Menu />
      <main className="h-full w-full">
        {children}
      </main>
      <div className="sm:hidden">
        <NavBar items={navItems} />
      </div>
    </div>
  );
};

export default Layout;
