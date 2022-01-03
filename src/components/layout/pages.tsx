// Components
import Icon from "@components/global/icon";

/**
 * Navigation items seperated into groups
 * 
 * For Navigation Drawers (`NavDrawer` from `nav-drawer.tsx`)
 */
export const navGroups = [
  {
    name: "Summaries",
    items: [
      {
        name: "Dashboard",
        icon: <Icon icon="dashboard" />,
        url: "/",
      },
      {
        name: "Events and Announcements",
        icon: <Icon icon="event" />,
        url: "/events",
      },
      {
        name: "Schedule",
        icon: <Icon icon="schedule" />,
        url: "/schedule",
      },
      {
        name: "Your Assignments",
        icon: <Icon icon="assignment" />,
        url: "/assignments",
      },
      {
        name: "Your Class",
        icon: <Icon icon="groups" />,
        url: "/class/1/405",
      },
    ],
  },
  {
    name: "School",
    items: [
      { name: "Forms", icon: <Icon icon="edit" />, url: "/forms" },
      {
        name: "COVID-19 Infections",
        icon: <Icon icon="coronavirus" />,
        url: "/covid",
      },
    ],
  },
  {
    name: "Database",
    items: [
      {
        name: "Teacher List",
        icon: <Icon icon="person_search" />,
        url: "/db/teachers",
      },
      {
        name: "Subjects List",
        icon: <Icon icon="class" />,
        url: "/db/subjects",
      },
      {
        name: "Classrooms List",
        icon: <Icon icon="table_view" />,
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
  { name: "Dashboard", icon: <Icon icon="dashboard" />, url: "/" },
  { name: "Events", icon: <Icon icon="event" />, url: "/events" },
  { name: "Schedule", icon: <Icon icon="schedule" />, url: "/schedule" },
  { name: "To-do", icon: <Icon icon="assignment" />, url: "/assignments" },
  { name: "Class", icon: <Icon icon="groups" />, url: "/class/1/405" },
  { name: "Database", icon: <Icon icon="table_chart" />, url: "/db" },
];