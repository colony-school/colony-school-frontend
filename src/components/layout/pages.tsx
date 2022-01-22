// Components
import MaterialIcon from "@components/global/icon/material";

// Types
import { NavGroup } from "@utils/types/navigation";

/**
 * Navigation items seperated into groups
 * 
 * For Navigation Drawers (`NavDrawer` from `nav-drawer.tsx`)
 */
export const navGroups: Array<NavGroup> = [
  {
    name: "Summaries",
    items: [
      {
        name: "Dashboard",
        icon: <MaterialIcon icon="dashboard" />,
        url: "/",
      },
      {
        name: "Events and Announcements",
        icon: <MaterialIcon icon="event" />,
        url: "/events",
      },
      {
        name: "Schedule",
        icon: <MaterialIcon icon="schedule" />,
        url: "/1/405/schedule",
      },
      {
        name: "Your Assignments",
        icon: <MaterialIcon icon="assignment" />,
        url: "/assignments",
      },
      {
        name: "Your Class",
        icon: <MaterialIcon icon="groups" />,
        url: "/1/405/class",
      },
    ],
  },
  {
    name: "Live Info",
    items: [
      { name: "Forms", icon: <MaterialIcon icon="edit" />, url: "/forms" },
      {
        name: "COVID-19 Infections",
        icon: <MaterialIcon icon="coronavirus" />,
        url: "/covid",
      },
    ],
  },
  {
    name: "Database",
    items: [
      {
        name: "Teacher List",
        icon: <MaterialIcon icon="person_search" />,
        url: "/db/teachers",
      },
      {
        name: "Subjects List",
        icon: <MaterialIcon icon="class" />,
        url: "/db/subjects",
      },
      {
        name: "Classrooms List",
        icon: <MaterialIcon icon="table_view" />,
        url: "/db/classrooms",
      },
    ],
  },
];

/**
 * Navigation items; for
 * * Navigation Bar (`NavBar` from `nav-bar.tsx`)
 * * Navigation Rail (`NavRail` from `nav-rail.tsx`)
 */
export const navItems = [
  { name: "Dashboard",icon: <MaterialIcon icon="dashboard" />, url: "/" },
  { name: "Schedule", icon: <MaterialIcon icon="schedule" />,url: "/1/405/schedule", },
  { name: "To-do", icon: <MaterialIcon icon="assignment" />, url: "/assignments" },
  { name: "Class", icon: <MaterialIcon icon="groups" />, url: "/1/405/class" },
  { name: "Database", icon: <MaterialIcon icon="table_chart" />, url: "/db" },
];