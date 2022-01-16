// Modules
import { AnimatePresence, motion } from "framer-motion";

// Components
import MinifiedPost from "@components/feed/post/minified";
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import ClassInfo from "@components/subject-period/class-info";

// Types
import { SubjectPeriod } from "@utils/types/subject/period";

// Animations
import { bottomSheetAnim } from "@utils/animations/components";

/**
 * Some additional information on the selected subject period in the schedule
 * @param subjectPeriod The subject period
 */
const PeriodInfo = ({
  subjectPeriod,
  bottomSheetState,
  setBottomSheetState,
  closePeriodInfo
}: {
  subjectPeriod: SubjectPeriod | null;
  bottomSheetState: number;
  setBottomSheetState: Function;
  closePeriodInfo: Function;
}) => {
  return (
    <div className="flex flex-row justify-center w-full">
      <AnimatePresence>
        {bottomSheetState != 0 && subjectPeriod && (
          <motion.section
            key="period-info"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={bottomSheetAnim}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4 fixed bottom-16 w-full rounded-t-lg bg-light-surface1 dark:bg-dark-surface1
              lg:w-3/4 sm:bottom-0 sm:w-[calc(100%-6rem)] sm:pt-4 overflow-hidden"
            aria-live="assertive"
          >
            <button
              className="flex flex-row justify-center w-full p-2 sm:hidden group"
              onClick={() => {
                if (bottomSheetState == 1) setBottomSheetState(2);
                else setBottomSheetState(1);
              }}
            >
              <div
                className="h-2 w-32 rounded-full bg-light-surface-variant dark:bg-dark-surface-variant transition-colors
                  group-hover:bg-light-surface5 group-hover:dark:bg-dark-surface5"
              />
            </button>
            <div className="flex flex-row justify-between items-start px-4">
              <h2 className="text-4xl font-bold">
                {subjectPeriod.subject.enName.name}
              </h2>
              <button
                className="btn-text flex p-2 rounded-full"
                onClick={() => closePeriodInfo()}
              >
                <MaterialIcon
                  icon="close"
                  className="text-light-on-surface dark:text-dark-on-surface"
                />
              </button>
            </div>
            <div
              className={`px-4 sm:h-fit sm:overflow-hidden transition-[height] ${
                bottomSheetState == 1 ? "h-48" : "h-96"
              }`}
            >
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
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeriodInfo;
