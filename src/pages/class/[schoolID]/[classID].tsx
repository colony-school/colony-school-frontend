// Modules
import { NextPage } from "next";

// Components
import TopAppBar from "@components/layout/top-app-bar";
import MaterialIcon from "@components/global/icon";

const ClassID: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen">
      <div className="hidden sm:block">
        <TopAppBar title="Your Class" />
      </div>
      <div className="flex flex-col h-full">
        <div className="h-64 bg-light-surface-variant dark:bg-dark-surface-variant" />
        <div className="flex flex-row justify-center translate-y-[-50%]">
          <header className="flex flex-col gap-4 w-[36ch] py-4 px-8 bg-light-primary-container dark:bg-dark-primary-container rounded-3xl shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold">M.405</h2>
              <p className="text-base">Moderated by Paniti P.</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-end">
                <p className="text-base">English 8</p>
                <div className="flex flex-row gap-1">
                  <button className="btn btn-outlined flex p-2 rounded-full"><MaterialIcon icon="subject" /></button>
                  <button className="btn btn-outlined flex p-2 rounded-full"><MaterialIcon icon="schedule" /></button>
                  <button className="btn btn-filled flex rounded-full"><MaterialIcon icon="videocam" /></button>
                </div>
              </div>
                <progress className="progress"></progress>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default ClassID;
