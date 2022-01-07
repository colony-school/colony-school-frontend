// Modules
import { useState } from "react";

// Components
import Post from "@components/feed/post";

// Types
import { Post as PostType } from "@utils/types/post";

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
            name: "Chinese",
            instructors: [{ name: "Thanyapat Charoenporn" }],
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
              name: "Chemistry",
              instructors: [{ name: "Thanthapatra Bunchuoy" }],
              periodStart: new Date(2021, 8, 7, 8, 30, 0),
              periodLength: 100,
              assignmentsDue: [],
            },
            {
              name: "Earth and Space",
              instructors: [{ name: "Nattharika Rodsatid" }],
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
            // this is not a file, just an object stand-in that looks like a file
            lastModified: 0,
            name: "tideman_2.cpp",
            webkitRelativePath: "tideman_2.cpp",
            size: 120483,
            type: "text/cpp",
          },
          usePolicies: {
            noCopy: true,
            noParaphrase: true,
            noShare: true,
          },
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
            name: "Physics 1",
            instructors: [{ name: "Niruth Prombutr" }],
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
      {feed.map((post) => {
        return <Post post={post} />;
      })}
    </ul>
  );
};

export default Feed;
