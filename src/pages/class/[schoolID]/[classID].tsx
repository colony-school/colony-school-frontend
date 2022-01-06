// Modules
import { NextPage } from "next";

// Components
import ActionCard from "@components/feed/action-card";
import TopAppBar from "@components/layout/top-app-bar";
import Feed from "@components/feed";

const ClassFeedPage: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen">
      <div className="hidden sm:block">
        <TopAppBar title="Your Class" />
      </div>
      <div className="flex flex-col h-full">
        <div className="h-64 bg-light-surface-variant dark:bg-dark-surface-variant" />
        <div className="flex flex-row justify-center translate-y-[-50%]">
          <ActionCard
            name="M.405"
            moderator="Paniti P."
            currentClass={{
              name: "English 8",
              periodStart: {
                hours: 14,
                minutes: 20,
                seconds: 0,
              },
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
