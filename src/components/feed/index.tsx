// Components
import PostType from "@components/feed/post";

/**
 * A list of posts curiously curated by *not* an algorithm because why would we have an algorithm for this
 *
 * For “Your Class” page
 */
const Feed = () => {
  return (
    <ul className="flex flex-col gap-4 items-center pb-8 sm:px-8">
      <PostType
        post={{
          author: "Tempoom L.",
          postDate: new Date(),
          content:
            "If you wanna stay for the whole event, you should know that the second half is overlapping with Chinese class. You should \
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
                instructors: [
                  { name: "Thanyapat Charoenporn" }
                ],
                periodStart: {
                  hours: 11,
                  minutes: 50,
                  seconds: 0
                },
                periodLength: 50,
                assignmentsDue: []
              },
            },
          ],
        }}
      />
      <PostType
        post={{
          author: "Sirawish S.",
          postDate: new Date(),
          content:
            "T. Nattharika LINEd me that we will have her class on Tuesday in place of Chem so I put it here for you guys to see.",
          attachments: [],
        }}
      />
    </ul>
  );
};

export default Feed;
