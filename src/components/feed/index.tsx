// Modules
import { useState } from "react";

// Components
import Post from "@components/feed/post";

// Types
import { Post as PostType } from "@utils/types/feed/post";
import { Blob } from "buffer";

/**
 * A list of posts curiously curated by *not* an algorithm because why would we have an algorithm for this
 *
 * For “Your Class” page
 */
const Feed = () => {
  const [feed, setFeed] = useState<Array<PostType>>([
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
              instructors: [
                { firstName: "Thanyapat", lastName: "Charoenporn" },
              ],
            },
            periodStart: new Date(2021, 8, 14, 11, 50, 0),
            periodLength: 50,
            assignmentsDue: [],
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
                instructors: [
                  { firstName: "Nattharika", lastName: "Rodsatid" },
                ],
              },
              periodStart: new Date(2021, 8, 8, 9, 20, 0),
              periodLength: 50,
              assignmentsDue: [],
            },
          ],
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
  ]);

  return (
    <ul className="flex flex-col gap-4 items-center pb-8 sm:px-8">
      {feed.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </ul>
  );
};

export default Feed;
