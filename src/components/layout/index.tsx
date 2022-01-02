// Modules
import { ReactNode } from "react";

// Client components
import Menu from "@components/layout/menu";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-[2fr_6fr] sm:gap-8">
      <Menu
        groups={[
          {
            name: "Summaries",
            items: [
              { name: "Dashboard", icon: "dashboard", url: "/" },
              { name: "Events and Announcements", icon: "event", url: "/events" },
              { name: "Schedule", icon: "schedule", url: "/schedule" },
              { name: "Your Assignments", icon: "assignment", url: "/assignments" },
              { name: "Your Class", icon: "groups", url: "/class/1/405" },
            ],
          },
          {
            name: "School",
            items: [
              { name: "Forms", icon: "edit", url: "/forms" },
              { name: "COVID-19 Infections", icon: "coronavirus", url: "/covid" },
            ],
          },
          {
            name: "Database",
            items: [
              { name: "Teacher List", icon: "person_search", url: "/db/teachers" },
              { name: "Subjects List", icon: "class", url: "/db/subjects" },
              { name: "Classrooms List", icon: "table_view", url: "/db/classrooms" },
            ],
          },
        ]}
      />
      {children}
    </div>
  );
};

export default Layout;
