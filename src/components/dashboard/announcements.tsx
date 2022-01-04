// Modules
import Link from "next/link";

// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";

// Utils
import { to3LetterMonth } from "@utils/date";

const MainAnnouncementItem = ({
  name,
  desc,
  postDate,
  source
}: {
  name: string;
  desc: string;
  postDate: Date;
  source: string;
}): JSX.Element => {
  return (
    <li className="flex flex-col">
      <div className="w-full h-48 bg-light-surface-variant dark:bg-dark-surface-variant" />
      <div className="flex flex-row gap-4 py-3 px-4">
        <time className="flex flex-col items-center font-bold text-light-secondary dark:text-dark-secondary w-8">
          <p className="text-2xl">{postDate.getDate()}</p>
          <p className="text-base">{to3LetterMonth(postDate.getMonth())}</p>
        </time>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold">{name}</h4>
          <p className="text-base">{desc}</p>
          <div className="flex flex-row justify-end">
            <button className="btn btn-text">
              Read source
            </button>
            <button className="btn btn-outlined">
              <MaterialIcon icon="share" />
              Share
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

const Announcements = (): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <MaterialIcon
            icon="campaign"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3>Announcements</h3>}
      />
      <MainAnnouncementItem
        name="Shortened periods from period 4 onwards"
        desc="Shortened periods due to a school-wide teacher meeting at 16:00"
        postDate={new Date(2021, 9, 12)}
        source="https://youtu.be/dQw4w9WgXcQ"
      />
      <div className="flex flex-row justify-end p-4">
        <Link href="/events">
          <a className="btn btn-filled">See all</a>
        </Link>
      </div>
    </section>
  );
};

export default Announcements;
