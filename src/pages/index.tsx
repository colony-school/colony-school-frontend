// Modules
import type { NextPage } from "next";

// Components
import CurrentClass from "@components/dashboard/current-class";
import Featured from "@components/dashboard/featured";
import Assignments from "@components/dashboard/assignments";
import Announcements from "@components/dashboard/announcements";

/**
 * At-a-glance display of everything you need to know at school
 */
const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col">
      <CurrentClass />
      <main className="flex flex-row gap-7 p-7">
        <Featured />
        <Assignments />
        <Announcements />
      </main>
    </div>
  );
};

export default Dashboard;
