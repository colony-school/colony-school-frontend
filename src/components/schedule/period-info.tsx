// Components
import MinifiedPost from "@components/feed/post-minified";
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import ClassInfo from "@components/subject-period/class-info";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

/**
 * Some additional information on the selected subject period in the schedule
 * @param subjectPeriod The subject period
 */
const PeriodInfo = ({ subjectPeriod }: { subjectPeriod: SubjectPeriod }) => {
  return (
    <section
      className="bg-light-surface1 dark:bg-dark-surface1 p-4 sm:mt-7 sm:mx-7 sm:rounded-t-lg overflow-hidden"
      aria-live="assertive"
    >
      <div className="flex flex-row justify-between items-start">
        <h2 className="text-4xl font-bold">{subjectPeriod.subject.name}</h2>
        <button className="btn-text flex p-2 rounded-full">
          <MaterialIcon
            icon="close"
            className="text-light-on-surface dark:text-dark-on-surface"
          />
        </button>
      </div>
      <div className="h-48 overflow-auto sm:h-fit sm:overflow-hidden">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          <div className="pt-2">
            <h3 className="sr-only">Class Information</h3>
            <ClassInfo
              instructors={subjectPeriod.subject.instructors}
              periodStart={subjectPeriod.periodStart}
              periodLength={subjectPeriod.periodLength}
              dueNumber={subjectPeriod.assignmentsDue.length}
              noPadding={true}
            />
          </div>
          <div className="card-tonal flex flex-col rounded-t-lg">
            <Title
              icon={
                <MaterialIcon
                  icon="link"
                  className="text-light-primary dark:text-dark-primary"
                />
              }
              title={<h4>Related Posts</h4>}
            />
            <div className="h-40 px-4 overflow-auto scroll-1">
              <ul className="flex flex-col gap-2 pb-4">
                <MinifiedPost
                  post={{
                    author: "Tempoom L.",
                    postDate: new Date(2022, 0, 1, 0, 8, 39),
                    attachments: [],
                  }}
                />
                <MinifiedPost
                  post={{
                    author: "Sirawish S.",
                    postDate: new Date(2021, 11, 30, 14, 16, 3),
                    attachments: [],
                  }}
                />
                <MinifiedPost
                  post={{
                    author: "Smart W.",
                    postDate: new Date(2021, 11, 25, 9, 19, 58),
                    attachments: [],
                  }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeriodInfo;
