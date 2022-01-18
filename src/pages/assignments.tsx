// Modules
import { NextPage } from "next";

// Components
import Search from "@components/input/search";
import TopAppBar from "@components/layout/top-app-bar";

/**
 * Your Assignment
 */
const AssignmentsPage: NextPage = () => {
  return (
    <div className="flex flex-col sm:h-screen bg-light-surface2 dark:bg-dark-surface2">
      <div className="hidden sm:block">
        <TopAppBar title="Your Assignments" />
      </div>
      <div className="list-page">
        <div className="list-side">
          <Search placeholder="Search assignments" />
          <div className="list"></div>
        </div>
          <div className="list-side h-full overflow-auto">
            <div className="px-4 pt-4 pb-2">
              <div className="card card-elevated">thing</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;
