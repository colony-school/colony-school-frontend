// Modules
import { NextPage } from "next";
import { useState } from "react";

// Components
import TopAppBar from "@components/layout/top-app-bar";
import Schedule from "@components/schedule";
import PeriodInfo from "@components/schedule/period-info";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

const SchedulePage: NextPage = () => {
  const [activeID, setActiveID] = useState<number | null>(null);
  const [bottomSheetState, setBottomSheetState] = useState<number>(0);
  const [activeSubjectPeriod, setActiveSubjectPeriod] =
    useState<SubjectPeriod | null>({
      periodStart: new Date(2022, 0, 11, 8, 30, 0),
      periodLength: 100,
      assignmentsDue: [],
      subject: {
        codes: {},
        localName: {
          name: "เคมี",
          shortName: "เคมี",
        },
        enName: {
          name: "Chemistry",
          shortName: "Chem",
        },
        altNames: [],
        instructors: [{ firstName: "Thanthapatra", lastName: "Bunchuay" }],
      },
    });

  function openPeriodInfo(scheduleItemID: number) {
    setBottomSheetState(1);
    setActiveID(scheduleItemID);
  }

  function closePeriodInfo() {
    setBottomSheetState(0);
    setActiveID(null);
  }

  return (
    <div className="flex flex-col sm:h-screen overflow-auto">
      <div className="hidden sm:block">
        <TopAppBar title="Schedule" />
      </div>
      <div
        className="h-[calc(100vh-7.25rem)] w-full overflow-auto scroll-1"
        id="main-content"
      >
        <Schedule
          schedule={{
            scheduleStart: { hours: 8, minutes: 30, seconds: 0 },
            content: [
              {
                weekDate: new Date(2022, 0, 10),
                content: [
                  {
                    id: 1,
                    periodStart: { hours: 8, minutes: 30, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ประชุมระดับ",
                        shortName: "ประชุม",
                      },
                      enName: {
                        name: "Grade Meeting",
                        shortName: "Meeting",
                      },
                      altNames: [],
                      instructors: [],
                    },
                  },
                  {
                    id: 2,
                    periodStart: { hours: 9, minutes: 20, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "เคมี",
                        shortName: "เคมี",
                      },
                      enName: {
                        name: "Chemistry",
                        shortName: "Chem",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Thanthapatra", lastName: "Bunchuay" },
                      ],
                    },
                  },
                  {
                    id: 3,
                    periodStart: { hours: 10, minutes: 10, seconds: 0 },
                    periodLength: 100,
                    subject: {
                      codes: {},
                      localName: {
                        name: "คณิตศาสตร์เพิ่มเติม",
                        shortName: "คณิตเพิ่ม",
                      },
                      enName: {
                        name: "Fundamental Mathematics",
                        shortName: "Fun Maths",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Kritchapon", lastName: "Boonpoonmee" },
                      ],
                    },
                  },
                  {
                    id: 4,
                    periodStart: { hours: 12, minutes: 40, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ภาษาไทย",
                        shortName: "ไทย",
                      },
                      enName: {
                        name: "Thai",
                        shortName: "Thai",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Supapon", lastName: "Khwansuwan" },
                      ],
                    },
                  },
                  {
                    id: 5,
                    periodStart: { hours: 13, minutes: 30, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ภาษาอังกฤษ",
                        shortName: "อังกฤษ",
                      },
                      enName: {
                        name: "English",
                        shortName: "English",
                      },
                      altNames: [],
                      instructors: [
                        {
                          firstName: "John",
                          middleName: "Peter",
                          lastName: "Smith",
                        },
                      ],
                    },
                  },
                  {
                    id: 6,
                    periodStart: { hours: 14, minutes: 20, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "คณิตศาสตร์เพิ่มเติม",
                        shortName: "คณิตเพิ่ม",
                      },
                      enName: {
                        name: "Additional Mathematics",
                        shortName: "Addi Maths",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Krissada ", lastName: "Asavaskulkiet" },
                      ],
                    },
                  },
                  {
                    id: 7,
                    periodStart: { hours: 15, minutes: 10, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ไทย",
                        shortName: "ภาษาไทย",
                      },
                      enName: {
                        name: "Thai",
                        shortName: "Thai",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Supapon", lastName: "Khwansuwan" },
                      ],
                    },
                  },
                ],
              },
              {
                weekDate: new Date(2022, 0, 11),
                content: [
                  {
                    id: 8,
                    periodStart: { hours: 8, minutes: 30, seconds: 0 },
                    periodLength: 100,
                    subject: {
                      codes: {},
                      localName: {
                        name: "เคมี",
                        shortName: "เคมี",
                      },
                      enName: {
                        name: "Chemistry",
                        shortName: "Chem",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Thanthapatra", lastName: " Bunchuay" },
                      ],
                    },
                  },
                  {
                    id: 9,
                    periodStart: { hours: 10, minutes: 10, seconds: 0 },
                    periodLength: 100,
                    subject: {
                      codes: {},
                      localName: {
                        name: "โลกและอวกาศ",
                        shortName: "ล.และอ.",
                      },
                      enName: {
                        name: "Earth and Space",
                        shortName: "E&S",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Nattharika", lastName: "Rodsatid" },
                      ],
                    },
                  },
                  {
                    id: 10,
                    periodStart: { hours: 12, minutes: 40, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ดนตรี",
                        shortName: "ดนตรี",
                      },
                      enName: {
                        name: "Music",
                        shortName: "Music",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Noppadon", lastName: "Keudpoka" },
                      ],
                    },
                  },
                  {
                    id: 11,
                    periodStart: { hours: 13, minutes: 30, seconds: 0 },
                    periodLength: 50,
                    subject: {
                      codes: {},
                      localName: {
                        name: "สังคมศึกษาและพลโลก",
                        shortName: "สังคม",
                      },
                      enName: {
                        name: "Social Studies",
                        shortName: "Social",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Noppadon", lastName: "Keudpoka" },
                      ],
                    },
                  },
                  {
                    id: 12,
                    periodStart: { hours: 14, minutes: 20, seconds: 0 },
                    periodLength: 100,
                    subject: {
                      codes: {},
                      localName: {
                        name: "ฟิสิกส์",
                        shortName: "ฟิสิกส์",
                      },
                      enName: {
                        name: "Physics",
                        shortName: "Physics",
                      },
                      altNames: [],
                      instructors: [
                        { firstName: "Niruth", lastName: "Prombutr" },
                      ],
                    },
                  },
                ],
              },
              {
                weekDate: new Date(2022, 0, 12),
                content: [],
              },
              {
                weekDate: new Date(2022, 0, 13),
                content: [],
              },
              {
                weekDate: new Date(2022, 0, 14),
                content: [],
              },
            ],
          }}
          activeID={activeID}
          onClick={openPeriodInfo}
        />
        <PeriodInfo
          subjectPeriod={activeSubjectPeriod}
          bottomSheetState={bottomSheetState}
          setBottomSheetState={setBottomSheetState}
          closePeriodInfo={closePeriodInfo}
        />
      </div>
    </div>
  );
};

export default SchedulePage;
