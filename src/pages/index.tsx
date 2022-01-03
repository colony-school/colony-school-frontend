// Modules
import type { NextPage } from "next";

// Components
import Announcements from "@components/dashboard/announcements";
import Assignments from "@components/dashboard/assignments";
import CurrentClass from "@components/dashboard/current-class";
import Featured from "@components/dashboard/featured";

/**
 * At-a-glance display of everything you need to know at school
 */
const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen">
      <CurrentClass />
      <main className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-7 p-7 h-full overflow-auto">
        <Featured />
        <Assignments />
        <Announcements />
      </main>
    </div>
  );
};

export default Dashboard;
