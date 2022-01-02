// Modules
import type { NextPage } from "next"

// Components
import CurrentClass from "@components/dashboard/current-class";

/**
 * At-a-glance display of everything you need to know at school
 */
const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col">
      <CurrentClass />
    </div>
  )
}

export default Dashboard;
