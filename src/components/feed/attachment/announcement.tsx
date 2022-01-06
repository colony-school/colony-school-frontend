// Modules
import format from "date-fns/format";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

// Types
import { Announcement } from "@utils/types/announcement";

const AnnouncementAttachment = ({
  announcement,
}: {
  announcement: Announcement;
}) => {
  return (
    <li
      className="flex flex-col md:grid md:grid-cols-2 bg-light-primary-container dark:bg-dark-primary-container"
    >
      <Title
        icon={
          <MaterialIcon
            icon="event"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h4>Event: {announcement.title}</h4>}
        subhead={announcement.desc}
      />
      {announcement.eventStart && (
        <Title
          icon={<MaterialIcon icon="schedule" />}
          title={<h4>Date: {format(announcement.eventStart, "dd/MM/yyyy")}</h4>}
        />
      )}
    </li>
  );
};

export default AnnouncementAttachment;
