// Modules
import { format } from "date-fns";
import { NextPage } from "next";
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { ListedAnnouncement } from "@utils/types/announcement";

/**
 * The search bar
 */
const SearchBar = () => {
  return (
    <div className="px-4 pt-4">
      <div
        className="flex flex-row justify-between items-center w-full h-12 bg-light-surface dark:bg-dark-surface shadow
        rounded-full"
      >
        <div className="grid place-items-center h-full px-6">
          <MaterialIcon icon="search" />
        </div>
        <input
          className="block w-full h-full bg-light-surface dark:bg-dark-surface
          placeholder:text-light-on-surface placeholder:dark:text-dark-on-surface"
          placeholder="Search events"
          role="search"
        />
        <div className="grid place-items-center h-full px-6">
          <MaterialIcon icon="filter" />
        </div>
      </div>
    </div>
  );
};

/**
 *
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
            icon={event.type}
            className="text-light-primary dark:text-dark-primary"
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
      id: 5,
      title: "Final Exam",
      postDate: new Date(2021, 9, 13),
      type: "event",
    },
    {
      id: 6,
      title: "Banana Eating Contest",
      postDate: new Date(2021, 9, 14),
      type: "event",
    },
  ]);

  const [activeID, setActiveID] = useState<number | null>(null);

  return (
    <div className="bg-light-surface2 dark:bg-dark-surface2">
      <TopAppBar />
      <div
        className="flex flex-col gap-4 sm:grid sm:grid-cols-[2fr_3fr] sm:gap-0 bg-light-surface3 dark:bg-dark-surface3
        rounded-tl-lg"
      >
        <div className="flex flex-col gap-4 pl-4 pt-4">
          <SearchBar />
          <ul className="flex flex-col gap-4 px-4 pb-4 overflow-auto">
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
          <div className="card card-elevated">
            <Title
              icon={<MaterialIcon icon="event" />}
              title={<h2>{activeID}</h2>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exports
export default Events;
