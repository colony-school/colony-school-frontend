// Modules
import { NextPage } from "next";

// Components
import TopAppBar from "@components/layout/top-app-bar";
import Schedule from "@components/schedule";
import PeriodInfo from "@components/schedule/period-info";

const SchedulePage: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen overflow-auto">
      <div className="hidden sm:block">
        <TopAppBar title="Schedule" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="w-full overflow-auto">
          <Schedule
            schedule={{
              scheduleStartTime: {
                hours: 8,
                minutes: 30,
                seconds: 0,
              },
              content: [
                {
                  weekDate: new Date(2022, 0, 10),
                  content: [
                    {
                      name: "Meeting",
                      instructors: [],
                      periodStart: new Date(2022, 0, 10, 8, 30, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                    {
                      name: "Chemistry",
                      instructors: [{ name: "Thanthapatra Bunchuay" }],
                      periodStart: new Date(2022, 0, 10, 9, 20, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                    {
                      name: "Fundamental Mathematics",
                      instructors: [{ name: "Kritchapon Boonpoonmee" }],
                      periodStart: new Date(2022, 0, 10, 10, 10, 0),
                      periodLength: 100,
                      assignmentsDue: [],
                    },
                    {
                      name: "Thai",
                      instructors: [{ name: "Supapon Khwansuwan" }],
                      periodStart: new Date(2022, 0, 10, 12, 40, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                    {
                      name: "English",
                      instructors: [{ name: "John Peter Smith" }],
                      periodStart: new Date(2022, 0, 10, 13, 30, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                    {
                      name: "Additional Mathematics",
                      instructors: [{ name: "Krissada Asavaskulkiet" }],
                      periodStart: new Date(2022, 0, 10, 14, 20, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                    {
                      name: "Health",
                      instructors: [{ name: "Rusman Manor" }],
                      periodStart: new Date(2022, 0, 10, 15, 10, 0),
                      periodLength: 50,
                      assignmentsDue: [],
                    },
                  ],
                },
                {
                  weekDate: new Date(2022, 0, 11),
                  content: [
                    {
                      name: "Chemistry",
                      instructors: [{ name: "Thanthapatra Bunchuay" }],
                      periodStart: new Date(2022, 0, 11, 8, 30, 0),
                      periodLength: 100,
                      assignmentsDue: [],
                    },
                    {
                      name: "Earth and Space",
                      instructors: [{ name: "Nattharika Rodsatid" }],
                      periodStart: new Date(2022, 0, 11, 10, 10, 0),
                      periodLength: 100,
                      assignmentsDue: [],
                    },
                  ],
                },
              ],
            }}
          />
        </div>
        <PeriodInfo
          subjectPeriod={{
            name: "Chemistry",
            instructors: [{ name: "Thanthapatra Bunchuay" }],
            periodStart: new Date(2022, 0, 10, 10, 10, 0),
            periodLength: 50,
            assignmentsDue: [],
          }}
        />
      </div>
    </div>
  );
};

export default SchedulePage;
