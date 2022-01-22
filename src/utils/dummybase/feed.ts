// Types
import { Post } from "@utils/types/feed/post";

/**
 * Some dummy data for the feed (array of posts)
 */
const dummyFeed: Array<Post> = [
  {
    author: "Tempoom L.",
    postDate: new Date(2021, 8, 12, 0, 11, 5),
    content:
      "If you wanna stay for the whole event, you should know that the **second half is overlapping with Chinese class**. You should \
      fill in this absence form and contact T. Thanyapat.",
    attachments: [
      {
        type: "announcement",
        announcement: {
          id: 2,
          title: "Banana Eating Contest",
          type: "event",
          desc: "No questions asked. Come to Sala Phrasadej at lunch and try!",
          postDate: new Date(2021, 9, 14),
          eventStart: new Date(2021, 9, 14, 11, 0),
          eventEnd: new Date(2021, 9, 14, 12, 40),
          source: "http://mysk.school/th/index.php",
        },
      },
      {
        type: "subject-period",
        subjectPeriod: {
          subject: {
            codes: {},
            localName: {
              name: "ภาษาจีน",
              shortName: "ภาษาจีน",
            },
            enName: {
              name: "Chinese",
              shortName: "Chinese",
            },
            altNames: [],
            instructors: [{ firstName: "Thanyapat", lastName: "Charoenporn" }],
          },
          periodStart: new Date(2021, 8, 14, 11, 50, 0),
          periodLength: 50,
          assignmentsDue: [],
        },
        relevantSchedule: {
          scheduleStart: { hours: 8, minutes: 30, seconds: 0 },
          content: [
            {
              weekDate: new Date(2021, 8, 14),
              content: [
                {
                  id: 27,
                  periodStart: { hours: 8, minutes: 30, seconds: 0 },
                  periodLength: 100,
                },
                {
                  id: 28,
                  periodStart: { hours: 10, minutes: 10, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 29,
                  periodStart: { hours: 11, minutes: 0, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 30,
                  periodStart: { hours: 11, minutes: 50, seconds: 0 },
                  periodLength: 50,
                  break: true,
                },
                {
                  id: 31,
                  periodStart: { hours: 12, minutes: 40, seconds: 0 },
                  periodLength: 50,
                  relevant: true,
                },
                {
                  id: 32,
                  periodStart: { hours: 13, minutes: 30, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 33,
                  periodStart: { hours: 14, minutes: 20, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 34,
                  periodStart: { hours: 15, minutes: 10, seconds: 0 },
                  periodLength: 50,
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    author: "Sirawish S.",
    postDate: new Date(2021, 8, 3, 11, 50, 0),
    content:
      "T. Nattharika LINEd me that we will have her class on Tuesday in place of Chem so I put it here for you guys to see.",
    attachments: [
      {
        type: "period-swap",
        periods: [
          {
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
            periodStart: new Date(2021, 8, 7, 8, 30, 0),
            periodLength: 100,
            assignmentsDue: [],
          },
          {
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
              instructors: [{ firstName: "Nattharika", lastName: "Rodsatid" }],
            },
            periodStart: new Date(2021, 8, 8, 9, 20, 0),
            periodLength: 50,
            assignmentsDue: [],
          },
        ],
        relevantSchedule: {
          scheduleStart: { hours: 8, minutes: 30, seconds: 0 },
          content: [
            {
              weekDate: new Date(2021, 8, 14),
              content: [
                {
                  id: 12,
                  periodStart: { hours: 8, minutes: 30, seconds: 0 },
                  periodLength: 100,
                  relevant: true,
                },
                {
                  id: 13,
                  periodStart: { hours: 10, minutes: 10, seconds: 0 },
                  periodLength: 100,
                },
                {
                  id: 14,
                  periodStart: { hours: 11, minutes: 50, seconds: 0 },
                  periodLength: 50,
                  break: true,
                },
                {
                  id: 15,
                  periodStart: { hours: 12, minutes: 40, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 16,
                  periodStart: { hours: 13, minutes: 30, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 17,
                  periodStart: { hours: 14, minutes: 20, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 18,
                  periodStart: { hours: 15, minutes: 10, seconds: 0 },
                  periodLength: 50,
                },
              ],
            },
            {
              weekDate: new Date(2021, 8, 15),
              content: [
                {
                  id: 19,
                  periodStart: { hours: 8, minutes: 30, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 20,
                  periodStart: { hours: 9, minutes: 20, seconds: 0 },
                  periodLength: 50,
                  relevant: true,
                },
                {
                  id: 21,
                  periodStart: { hours: 10, minutes: 10, seconds: 0 },
                  periodLength: 100,
                },
                {
                  id: 22,
                  periodStart: { hours: 11, minutes: 50, seconds: 0 },
                  periodLength: 50,
                  break: true,
                },
                {
                  id: 23,
                  periodStart: { hours: 12, minutes: 40, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 24,
                  periodStart: { hours: 13, minutes: 30, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 25,
                  periodStart: { hours: 14, minutes: 20, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 26,
                  periodStart: { hours: 15, minutes: 10, seconds: 0 },
                  periodLength: 50,
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    author: "Smart W.",
    postDate: new Date(2021, 7, 29, 11, 50, 0),
    content:
      "This one was very hard. Use responsibly!\n\n*Edit: add types to function at line 18*",
    attachments: [
      {
        type: "file",
        file: {
          name: "tideman.c",
          size: 6360,
          url: "https://raw.githubusercontent.com/me50/SiravitPhokeed/b94f2f1ca5025f785be0f845ebdaffc29c8f4076/tideman.c?token=GHSAT0AAAAAABNTUSV32OBN7MNCZVYJ3LK6YPKRPHQ",
        },
        usePolicies: [
          {
            id: 1,
            name: "No Copy",
            summary: "The user must not copy the material.",
            desc: "The user must not copy the material word for word.",
          },
          {
            id: 2,
            name: "No Paraphrase",
            summary: "The user must not paraphrase the material.",
            desc: "The user must not paraphrase the material. Changing sentence structure and switching synonyms is prohibited.",
          },
          {
            id: 3,
            name: "No Share",
            summary: "The user must not share the material.",
            desc: "The user must not share the material. Methods include screen-sharing and sending the material elsewhere.",
          },
        ],
      },
      {
        type: "assignment",
        assignment: {
          id: 1,
          name: "Tideman",
          desc: "The **Tideman voting method** (also known as “ranked pairs”) is a ranked-choice voting method that’s guaranteed \
          to produce the Condorcet winner of the election if one exists.\n\n Generally speaking, the Tideman method works by \
          **constructing a “graph” of candidates**, where an **arrow** (i.e. edge) **from candidate A to candidate B** indicates \
          that **candidate A wins against candidate B** in a head-to-head matchup.",
          subject: "CS50",
          due: new Date(2021, 10, 6, 23, 59),
          status: "not-started",
          urgent: false,
        },
      },
    ],
  },
  {
    author: "Aniwat P.",
    postDate: new Date(2021, 10, 10, 8, 29, 54),
    content: "***Please*** pay.",
    attachments: [
      {
        type: "payment",
        name: "Gimme",
        totalOwed: 600.0,
        perPersonOwed: 20.0,
        unpaidPeople: ["Tanvin C.", "Siravit P.", "Viboon C."],
        unpaid: true,
      },
    ],
  },
  {
    author: "Siravit P.",
    postDate: new Date(2021, 10, 9, 15, 13, 42),
    content:
      "Some slides from today’s Physics class. I think I missed a few but I mean I don’t think he reads our lectures that \
      carefully anyway…",
    attachments: [
      {
        type: "slides",
        name: "Circular Motion",
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
          instructors: [{ firstName: "Niruth", lastName: "Prombutr" }],
        },
        slides: [
          "/images/dummybase/attachments/slide-1.png",
          "/images/dummybase/attachments/slide-2.png",
          "/images/dummybase/attachments/slide-3.png",
          "/images/dummybase/attachments/slide-4.png",
          "/images/dummybase/attachments/slide-5.png",
          "/images/dummybase/attachments/slide-6.png",
          "/images/dummybase/attachments/slide-7.png",
          "/images/dummybase/attachments/slide-8.png",
          "/images/dummybase/attachments/slide-9.png",
        ],
      },
      {
        type: "subject-period",
        subjectPeriod: {
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
            instructors: [{ firstName: "Niruth", lastName: "Prombutr" }],
          },
          periodStart: new Date(2021, 10, 9, 14, 20, 0),
          periodLength: 50,
          assignmentsDue: [],
        },
        relevantSchedule: {
          scheduleStart: { hours: 8, minutes: 30, seconds: 0 },
          content: [
            {
              weekDate: new Date(2021, 11, 7),
              content: [
                {
                  id: 1,
                  periodStart: { hours: 8, minutes: 30, seconds: 0 },
                  periodLength: 100,
                },
                {
                  id: 2,
                  periodStart: { hours: 10, minutes: 10, seconds: 0 },
                  periodLength: 100,
                },
                {
                  id: 3,
                  periodStart: { hours: 11, minutes: 50, seconds: 0 },
                  periodLength: 50,
                  break: true,
                },
                {
                  id: 4,
                  periodStart: { hours: 12, minutes: 40, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 5,
                  periodStart: { hours: 13, minutes: 30, seconds: 0 },
                  periodLength: 50,
                },
                {
                  id: 6,
                  periodStart: { hours: 14, minutes: 20, seconds: 0 },
                  periodLength: 100,
                  relevant: true,
                },
              ],
            },
          ],
        },
      },
      {
        type: "assignment",
        assignment: {
          id: 18,
          name: "Lecture #2",
          desc: "Circular motion lecture",
          subject: "Physics 1",
          due: new Date(2022, 0, 8, 23, 59, 59),
          status: "started",
          urgent: false,
        },
      },
    ],
  },
];

export default dummyFeed;
