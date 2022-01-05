// Modules
import { format } from "date-fns";
import { NextPage } from "next";
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { Announcement, ListedAnnouncement } from "@utils/types/announcement";

/**
 * The search bar
 */
const SearchBar = () => {
  return (
    <div className="px-4 pt-4 pb-2">
      <div
        className="flex flex-row justify-between items-center w-full h-12 bg-light-surface dark:bg-dark-surface overflow-hidden shadow
        rounded-full"
      >
        <button className="btn-text grid place-items-center h-full px-4 text-light-on-surface dark:text-dark-on-surface">
          <MaterialIcon icon="search" />
        </button>
        <input
          className="block w-full h-full bg-light-surface dark:bg-dark-surface
          placeholder:text-light-on-surface placeholder:dark:text-dark-on-surface"
          placeholder="Search events"
          role="search"
        />
        <button className="btn-text grid place-items-center h-full px-4 text-light-on-surface dark:text-dark-on-surface">
          <MaterialIcon icon="filter_list" />
        </button>
      </div>
    </div>
  );
};

/**
 * Events and announcement listed in the list
 * @param event
 */
const EventItem = ({
  event,
  active,
  setActiveID,
}: {
  event: ListedAnnouncement;
  active: boolean;
  setActiveID: Function;
}): JSX.Element => {
  return (
    <li>
      <button
        className={`card flex flex-row justify-between items-center gap-4 h-20 text-left
        bg-light-surface1 dark:bg-dark-surface1 ${
          active
            ? "text-light-on-primary-container bg-light-primary-container \
              dark:text-dark-on-primary-container dark:bg-dark-primary-container shadow"
            : "text-light-on-surface bg-light-surface1 dark:text-dark-on-surface dark:bg-dark-surface1"
        }`}
        onClick={() => setActiveID(event.id)}
      >
        <div className="flex flex-row items-center px-4 gap-4">
          <MaterialIcon
            icon={event.type == "event" ? "event" : "mail"}
            className={`text-4xl ${
              active
                ? "text-light-on-surface-variant dark:text-dark-on-surface-variant"
                : "text-light-primary dark:text-dark-primary"
            }`}
          />
          <div>
            <p className="font-bold">{event.title}</p>
            <p>
              {event.type == "event" && "Event"}
              {event.type == "announcement" && "Announcement"}
              {" • "}
              {format(event.postDate, "dd/MM/yyyy")}
            </p>
          </div>
        </div>
        <div className="h-full rounded-r-lg aspect-square bg-light-surface-variant dark:bg-dark-surface-variant" />
      </button>
    </li>
  );
};

/**
 * A card displaying more information about the selected event
 * @param event
 */
const ActiveEventDisplay = ({
  event,
}: {
  event: Announcement;
}): JSX.Element => {
  return (
    <div className="card card-elevated">
      <Title
        icon={
          <MaterialIcon
            icon="event"
            className="text-4xl text-light-primary dark:text-dark-primary"
          />
        }
        title={<h2 className="font-bold">{event.title}</h2>}
        subhead="Event"
      />
    </div>
  );
};

/**
 * Events and announcements
 */
const Events: NextPage = () => {
  const [events, setEvents] = useState<Array<ListedAnnouncement>>([
    {
      id: 4,
      title: "Shortened Periods",
      postDate: new Date(2021, 9, 12),
      type: "announcement",
    },
    {
      id: 1,
      title: "Final Exam",
      postDate: new Date(2021, 9, 13),
      type: "event",
    },
    {
      id: 2,
      title: "Banana Eating Contest",
      postDate: new Date(2021, 9, 14),
      type: "event",
    },
    {
      id: 3,
      title: "Cut periods",
      postDate: new Date(2021, 9, 31),
      type: "announcement",
    },
  ]);

  const [activeID, setActiveID] = useState<number>(events[0].id);
  const [activeEvent, setActiveEvent] = useState<Announcement>({
    id: 4,
    title: "Banana Eating Contest",
    desc: "Sed turpis quam, euismod sit amet ullamcorper ut, facilisis sed nulla. Proin nisi felis, lobortis eget lacinia et, hendrerit sit \
      amet orci. Fusce quis felis in velit dictum suscipit a in libero. In leo felis, consectetur in dignissim a, congue viverra orci. \
      Proin sed est magna. Donec at risus sollicitudin, cursus ipsum ut, convallis risus. In convallis, est eget congue imperdiet, lorem \
      augue imperdiet tortor, nec pretium orci neque et lacus.",
    postDate: new Date(2021, 9, 12),
    source: "https://youtu.be/dQw4w9WgXcQ",
    image: "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
    eventStart: new Date(2021, 9, 14, 11, 50),
    eventEnd: new Date(2021, 9, 14, 12, 40),
    type: "announcement",
  });

  return (
    <div className="bg-light-surface2 dark:bg-dark-surface2">
      <TopAppBar />
      <div
        className="flex flex-col gap-4 sm:grid sm:grid-cols-[2fr_3fr] sm:gap-0 bg-light-surface3 dark:bg-dark-surface3
        rounded-tl-lg"
      >
        <div className="flex flex-col pl-4 pt-4">
          <SearchBar />
          <ul className="flex flex-col gap-4 px-4 pt-2 pb-4 overflow-auto">
            {events.map((event) => {
              return (
                <EventItem
                  event={event}
                  active={activeID == event.id}
                  setActiveID={setActiveID}
                />
              );
            })}
          </ul>
        </div>
        <div className="p-8">
          <ActiveEventDisplay event={activeEvent} />
        </div>
      </div>
    </div>
  );
};

// Exports
export default Events;
