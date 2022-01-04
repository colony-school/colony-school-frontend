// Modules
import type { NextPage } from "next";

// Components
import Announcements from "@components/dashboard/announcements";
import Assignments from "@components/dashboard/assignments";
import CurrentClass from "@components/dashboard/current-class";
import Featured from "@components/dashboard/featured";
import TopAppBar from "@components/layout/top-app-bar";

/**
 * At-a-glance display of everything you need to know at school
 */
const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen">
      <div>
        <div className="hidden sm:block">
          <TopAppBar />
        </div>
        <CurrentClass
          subjectPeriod={{
            name: "English 8",
            instructors: [
              { name: "Dr John Peter Smith" },
              { name: "Mattana Tatanyang" },
            ],
            periodStart: {
              hours: 14,
              minutes: 20,
              seconds: 0
            },
            periodLength: 100,
            assignmentsDue: [
              {
                name: "jOHN pOEMS",
                due: new Date(2021, 11, 29, 23, 59, 59)
              }
            ]
          }}
        />
      </div>
      <main className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] lg:grid-cols-3 gap-7 p-7 h-full overflow-auto">
        <Featured />
        <Assignments />
        <Announcements />
      </main>
    </div>
  );
};

export default Dashboard;
