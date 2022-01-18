// Components
import MaterialIcon from "@components/global/icon/material";
import Title from "@components/global/title";

// Types
import { Announcement } from "@utils/types/announcement";

// Utils
import { formatDate, formatTime } from "@utils/date";

const AnnouncementAttachment = ({
  announcement,
}: {
  announcement: Announcement;
}) => {
  return (
    <li className="flex flex-col md:grid md:grid-cols-2 container-primary">
      <Title
        icon={
          <MaterialIcon
            icon="event"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h4 className="text-lg">Event: {announcement.title}</h4>}
        subhead={announcement.desc}
      />
      {announcement.eventStart && announcement.eventEnd && (
        <Title
          icon={
            <MaterialIcon
              icon="schedule"
              className="text-light-primary dark:text-dark-primary"
            />
          }
          title={
            <h4 className="text-lg">
              Date: {formatDate(announcement.eventStart, announcement.eventEnd)}
            </h4>
          }
          subhead={
            `at ${formatTime(
              announcement.eventStart,
              announcement.eventEnd
            )}` || "Invalid time"
          }
        />
      )}
    </li>
  );
};

export default AnnouncementAttachment;
