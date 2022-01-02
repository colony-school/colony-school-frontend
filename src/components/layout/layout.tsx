// Modules
import { ReactNode } from "react";

// Client components
import Menu from "@components/layout/menu";

/**
 * The layout for Colony School
 */
const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Menu groups={[
        {
          name: "Summaries",
          items: [
            { name: "Dashboard", url: "/" },
            { name: "Events and Announcements", url: "/events" },
            { name: "Schedule", url: "/schedule" },
            { name: "Your Assignments", url: "/assignments" },
            { name: "Your Class", url: "/class/1/405" },
          ],
        },
        {
          name: "School",
          items: [
            { name: "Forms", url: "/forms" },
            { name: "COVID-19 Infections", url: "/covid" },
          ],
        },
        {
          name: "Database",
          items: [
            { name: "Teacher List", url: "/db/teachers" },
            { name: "Subjects List", url: "/db/subjects" },
            { name: "Classrooms List", url: "/db/classrooms" },
          ],
        },
      ]} />
      <p>Hello</p>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;