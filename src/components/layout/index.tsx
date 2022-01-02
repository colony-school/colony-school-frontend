// Modules
import { ReactNode } from "react";

// Client components
import Menu from "@components/layout/menu";
import Icon from "@components/icon";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-[2fr_6fr]">
      <Menu
        groups={[
          {
            name: "Summaries",
            items: [
              { name: "Dashboard", icon: <Icon icon="dashboard" />, url: "/" },
              { name: "Events and Announcements", icon: <Icon icon="event" />, url: "/events" },
              { name: "Schedule", icon: <Icon icon="schedule" />, url: "/schedule" },
              { name: "Your Assignments", icon: <Icon icon="assignment" />, url: "/assignments" },
              { name: "Your Class", icon: <Icon icon="groups" />, url: "/class/1/405" },
            ],
          },
          {
            name: "School",
            items: [
              { name: "Forms", icon: <Icon icon="edit" />, url: "/forms" },
              { name: "COVID-19 Infections", icon: <Icon icon="coronavirus" />, url: "/covid" },
            ],
          },
          {
            name: "Database",
            items: [
              { name: "Teacher List", icon: <Icon icon="person_search" />, url: "/db/teachers" },
              { name: "Subjects List", icon: <Icon icon="class" />, url: "/db/subjects" },
              { name: "Classrooms List", icon: <Icon icon="table_view" />, url: "/db/classrooms" },
            ],
          },
        ]}
      />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
