// Modules
import Link from "next/link";

// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";
import Status from "@components/assignments/status";

const AssignmentItem = ({
  id,
  name,
  subject,
  due,
  status,
  urgent,
}: {
  id: number;
  name: string;
  subject: string;
  due: Date;
  status: "not-started" | "started" | "done";
  urgent: boolean;
}): JSX.Element => {
  return (
    <li>
      <Link href={`/assignments?id=${id}`}>
        <a
          className="flex flex-row justify-between items-end p-4 hover:bg-light-primary-0.08-tlc
          focus:bg-light-primary-0.12-tlc active:bg-light-primary-0.12-tlc"
        >
          <div>
            <p className="font-bold text-light-on-surface dark:text-dark-on-surface text-lg">{name}</p>
            <p className="text-light-on-surface-variant dark:text-dark-on-surface-variant text-base">
              {subject} • {due.toLocaleDateString("th-TH")}
            </p>
          </div>
          <Status status={status} urgent={urgent} pastDue={false} />
        </a>
      </Link>
    </li>
  );
};

const Assignments = (): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <MaterialIcon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3>Due Soon</h3>}
      />
      <ul>
        <AssignmentItem
          id={1}
          name="Tideman"
          subject="CS50"
          due={new Date(2021, 10, 6, 23, 59)}
          status="not-started"
          urgent={false}
        />
        <AssignmentItem
          id={2}
          name="Page 169-420"
          subject="Addi M"
          due={new Date(2021, 10, 8, 23, 59)}
          status="not-started"
          urgent={false}
        />
        <AssignmentItem
          id={3}
          name="Touch Grass"
          subject="PE"
          due={new Date(2021, 10, 6, 8, 30)}
          status="started"
          urgent={false}
        />
      </ul>
      <div className="flex flex-row justify-end p-4">
        <Link href="/assignments">
          <a className="btn btn-filled">
            See all
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Assignments;
