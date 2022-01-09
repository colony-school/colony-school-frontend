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
              scheduleStart: {
                hours: 8,
                minutes: 30,
                seconds: 0,
              },
              content: [
                {
                  weekDate: new Date(2022, 0, 10),
                  content: [
                    {
                      periodStart: { hours: 8, minutes: 30, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "Meeting",
                        instructors: [],
                      },
                    },
                    {
                      periodStart: { hours: 9, minutes: 20, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "Chemistry",
                        instructors: [
                          { firstName: "Thanthapatra", lastName: "Bunchuay" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 10, minutes: 10, seconds: 0 },
                      periodLength: 100,
                      subject: {
                        name: "Fundamental Mathematics",
                        instructors: [
                          { firstName: "Kritchapon", lastName: "Boonpoonmee" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 12, minutes: 40, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "Thai",
                        instructors: [
                          { firstName: "Supapon", lastName: "Khwansuwan" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 13, minutes: 30, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "English",
                        instructors: [
                          { firstName: "John Peter", lastName: "Smith" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 14, minutes: 20, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "Additional Mathematics",
                        instructors: [
                          { firstName: "Krissada ", lastName: "Asavaskulkiet" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 15, minutes: 10, seconds: 0 },
                      periodLength: 50,
                      subject: {
                        name: "Health",
                        instructors: [
                          { firstName: "Rusman", lastName: " Manor" },
                        ],
                      },
                    },
                  ],
                },
                {
                  weekDate: new Date(2022, 0, 11),
                  content: [
                    {
                      periodStart: { hours: 8, minutes: 30, seconds: 0 },
                      periodLength: 100,
                      subject: {
                        name: "Chemistry",
                        instructors: [
                          { firstName: "Thanthapatra", lastName: " Bunchuay" },
                        ],
                      },
                    },
                    {
                      periodStart: { hours: 10, minutes: 10, seconds: 0 },
                      periodLength: 100,
                      subject: {
                        name: "Earth and Space",
                        instructors: [
                          { firstName: "Nattharika", lastName: "Rodsatid" },
                        ],
                      },
                    },
                  ],
                },
              ],
            }}
          />
        </div>
        <PeriodInfo
          subjectPeriod={{
            periodStart: new Date(2022, 0, 10, 10, 10, 0),
            periodLength: 50,
            assignmentsDue: [],
            subject: {
              name: "Chemistry",
              instructors: [
                { firstName: "Thanthapatra", lastName: " Bunchuay" },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default SchedulePage;
