// Modules
import getUnixTime from "date-fns/getUnixTime";
import Link from "next/link";

// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";

// Types
import { GlanceAnnouncement } from "@utils/types/announcement";

// Utils
import { to3LetterMonth } from "@utils/date";

const AnnouncementPostDate = ({
  postDate,
}: {
  postDate: Date;
}): JSX.Element => {
  return (
    <time className="flex flex-col items-center font-bold text-light-secondary dark:text-dark-secondary w-8">
      <p className="text-2xl">{postDate.getDate()}</p>
      <p className="text-base">{to3LetterMonth(postDate.getMonth())}</p>
    </time>
  );
};

const MainAnnouncementItem = ({
  announcement,
}: {
  announcement: GlanceAnnouncement;
}): JSX.Element => {
  return (
    <li className="flex flex-col">
      <div className="w-full h-48 bg-light-surface-variant dark:bg-dark-surface-variant" />
      <div className="flex flex-row gap-4 py-3 px-4">
        <AnnouncementPostDate postDate={announcement.postDate} />
        <div className="flex flex-col gap-3">
          <h4 className="font-bold">{announcement.name}</h4>
          <p className="text-base">{announcement.desc}</p>
          <div className="flex flex-row justify-end">
            <a href={announcement.source} className="btn btn-text">
              Read source
            </a>
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

const AnnouncementItem = ({
  announcement,
}: {
  announcement: GlanceAnnouncement;
}): JSX.Element => {
  return (
    <li
      className="hover:bg-light-primary-0.08-tlc hover:dark:bg-dark-primary-0.08-tlc
      focus:bg-light-primary-0.12-tlc focus:dark:bg-dark-primary-0.12-tlc"
    >
      <Link href={`/events?id=${announcement.id}`}>
        <a>
          <div className="flex flex-row gap-4 items-center py-3 px-4">
            <AnnouncementPostDate postDate={announcement.postDate} />
            <h4 className="font-bold">{announcement.name}</h4>
          </div>
        </a>
      </Link>
    </li>
  );
};

const Announcements = ({
  announcements,
}: {
  announcements: Array<GlanceAnnouncement>;
}): JSX.Element => {
  // Sort the announcements by post date
  announcements.sort((a, b) => {
    return getUnixTime(a.postDate) - getUnixTime(b.postDate);
  });

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
      {announcements.length > 0 ? (
        <>
          <ul>
            <MainAnnouncementItem
              announcement={announcements[0]}
              key={announcements[0].name}
            />
            {announcements.slice(1).map((announcement) => {
              return <AnnouncementItem announcement={announcement} key={announcement.id} />;
            })}
          </ul>
          <div className="flex flex-row justify-end p-4">
            <Link href="/events">
              <a className="btn btn-filled">See all</a>
            </Link>
          </div>
        </>
      ) : (
        <p
          className="flex flex-row justify-center items-center gap-2 p-4
          text-light-on-surface-variant dark:text-dark-on-surface-variant"
        >
          <MaterialIcon
            icon="highlight_off"
            className="text-light-secondary dark:text-dark-secondary"
          />
          <p>No announcements</p>
        </p>
      )}
    </section>
  );
};

export default Announcements;
