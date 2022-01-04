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
              seconds: 0,
            },
            periodLength: 100,
            assignmentsDue: [
              {
                id: 4,
                name: "jOHN pOEMS",
                desc: "PLACEHOLDER",
                due: new Date(2021, 11, 29, 23, 59, 59),
                subject: "English",
                status: "done",
                urgent: false,
              },
            ],
          }}
        />
      </div>
      <main className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] lg:grid-cols-3 gap-7 p-7 h-full overflow-auto">
        <Featured
          featuredItems={[
            {
              name: "Get your Pfizer shot",
              desc: "Pfizer shots are now available for registeration",
              actions: [
                {
                  name: "Register",
                  type: "primary",
                  url: "https://youtu.be/dQw4w9WgXcQ",
                },
              ],
            },
            {
              name: "Join the Imsad Club!",
              desc: "We can be Im and be sad together at the Imsad club!",
              actions: [
                {
                  name: "Register",
                  type: "primary",
                  url: "https://imsad.dev/contacts",
                },
                {
                  name: "More info",
                  type: "tertiary",
                  url: "https://imsad.dev/about",
                },
              ],
            },
          ]}
        />
        <Assignments
          assignments={[
            {
              id: 1,
              name: "Tideman",
              desc: "PLACEHOLDER",
              subject: "CS50",
              due: new Date(2021, 10, 6, 23, 59),
              status: "not-started",
              urgent: false,
            },
            {
              id: 2,
              name: "Page 169-420",
              desc: "PLACEHOLDER",
              subject: "Addi M",
              due: new Date(2021, 10, 8, 23, 59),
              status: "not-started",
              urgent: false,
            },
            {
              id: 3,
              name: "Touch Grass",
              desc: "PLACEHOLDER",
              subject: "PE",
              due: new Date(2021, 10, 6, 8, 30),
              status: "started",
              urgent: false,
            },
          ]}
        />
        <Announcements />
      </main>
    </div>
  );
};

export default Dashboard;
