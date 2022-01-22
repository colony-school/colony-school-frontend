// Modules
import { NextPage } from "next";

// Components
import ActionCard from "@components/feed/action-card";
import TopAppBar from "@components/layout/top-app-bar";
import Feed from "@components/feed";

const ClassFeedPage: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen overflow-auto">
      <div className="hidden sm:block">
        <TopAppBar title="Your Class" scrim={true} className="fixed z-10" />
      </div>
      <div className="flex flex-col">
        <div className="relative h-96 max-h-[80vh] bg-light-surface-variant dark:bg-dark-surface-variant">
          <div className="w-full h-full bg-[url(/images/dummybase/classes/405.jpg)] bg-cover bg-center" />
        </div>
        <div
          className="flex flex-row justify-center translate-y-[-50%] scroll-m-16"
          id="main-content"
        >
          <ActionCard
            name="M.405"
            moderator="Paniti P."
            currentClass={{
              name: "English 8",
              periodStart: new Date(2022, 0, 8, 14, 20, 0),
              periodLength: 100,
            }}
          />
        </div>
        <Feed />
      </div>
    </div>
  );
};

export default ClassFeedPage;
