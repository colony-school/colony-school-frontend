// Modules
import { differenceInDays, format } from "date-fns";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";
import Headline from "@components/global/headline";
import Search from "@components/input/search";
import TopAppBar from "@components/layout/top-app-bar";

// Types
import { Announcement, ListedAnnouncement } from "@utils/types/announcement";

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
    <li className="card bg-light-surface1 dark:bg-dark-surface1">
      <button
        className={`card flex flex-row justify-between items-center gap-4 h-20 text-left transition-shadow ${
          active
            ? "text-light-on-primary-container bg-light-primary-container \
               dark:text-dark-on-primary-container dark:bg-dark-primary-container shadow \
               hover:shadow-md"
            : "text-light-on-surface bg-light-surface1 dark:text-dark-on-surface dark:bg-dark-surface1 \
               hover:bg-light-primary-0.08-tlc focus:bg-light-primary-0.12-tlc \
               hover:dark:bg-dark-primary-0.08-tlc focus:dark:bg-dark-primary-0.12-tlc"
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
        {event.image && (
          <div className="relative h-full rounded-r-lg aspect-square bg-light-surface-variant dark:bg-dark-surface-variant">
            <Image src={event.image} layout="fill" />
          </div>
        )}
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
  const oneDayEvent =
    differenceInDays(event.eventStart || 0, event.eventEnd || 0) === 0;

  return (
    <div className="card card-elevated overflow-hidden">
      <div className="card h-[calc(100vh-11.25rem)] overflow-auto">
        <div className="flex flex-col">
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
          <div className="flex flex-col overflow-auto">
            {event.image && (
              <div className="relative w-full h-48 bg-light-surface-variant dark:bg-dark-surface-variant">
                <Image src={event.image} layout="fill" />
              </div>
            )}
            {event.eventStart && event.eventEnd && (
              <div className="grid grid-cols-2">
                <Headline
                  icon={
                    <MaterialIcon
                      icon="calendar_today"
                      className="text-light-primary dark:text-dark-primary"
                    />
                  }
                  title={<h3 className="text-base">Date</h3>}
                  subhead={
                    <time>
                      {format(event.eventStart, "dd/MM/yyyy")}
                      {oneDayEvent
                        ? ""
                        : "–" + format(event.eventEnd, "dd/MM/yyyy")}
                    </time>
                  }
                />
                <Headline
                  icon={
                    <MaterialIcon
                      icon="schedule"
                      className="text-light-primary dark:text-dark-primary"
                    />
                  }
                  title={<h3 className="text-base">Time</h3>}
                  subhead={
                    <time>
                      {format(event.eventStart, "HH:mm")}–
                      {format(event.eventEnd, "HH:mm")}
                      {event.periodStart &&
                        event.periodEnd &&
                        ` (Period ${event.periodStart}–${event.periodEnd})`}
                    </time>
                  }
                />
              </div>
            )}
            {event.location && (
              <Headline
                icon={
                  <MaterialIcon
                    icon="place"
                    className="text-light-primary dark:text-dark-primary"
                  />
                }
                title={<h3 className="text-base">Location</h3>}
                subhead={
                  <div className="flex flex-row gap-2 items-center">
                    <p>{event.location}</p>
                    <button className="btn-text flex p-0 rounded-full">
                      <MaterialIcon
                        icon="map"
                        className="text-light-secondary dark:text-dark-secondary"
                      />
                    </button>
                  </div>
                }
              />
            )}
            <p className="p-4">{event.desc}</p>
            <div className="flex flex-row justify-end gap-2 p-4">
              <a href={event.source} className="btn btn-outlined">
                Read source
              </a>
              {event.actions &&
                event.actions.map((action) => {
                  return (
                    <a
                      href={action.url}
                      target="_blank"
                      className="btn btn-filled"
                    >
                      {action.name}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
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
      image: "/images/brand/logo.svg",
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
    desc: "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants \
      in the genus Musa. In some countries, bananas used for cooking may be called “plantains”, distinguishing them from dessert bananas. \
      The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered \
      with a rind, which may be green, yellow, red, purple, or brown when ripe.",
    type: "announcement",
    postDate: new Date(2021, 9, 12),
    source: "https://youtu.be/dQw4w9WgXcQ",
    image: "/images/brand/logo.svg",
    eventStart: new Date(2021, 9, 14, 11, 50),
    eventEnd: new Date(2021, 9, 14, 12, 40),
    periodStart: 4,
    periodEnd: 5,
    location: "Sala Phrasadej Building, 1st floor",
    actions: [
      { name: "Join", type: "primary", url: "https://smartwatt.me/contact" },
    ],
  });

  const [query, setQuery] = useState<string>();

  return (
    <div className="flex flex-col sm:h-screen bg-light-surface2 dark:bg-dark-surface2">
      <div className="hidden sm:block">
        <TopAppBar title="Events and Announcements" />
      </div>
      <div
        className="flex flex-col gap-4 sm:grid sm:grid-cols-[2fr_3fr] sm:gap-0 h-full bg-light-surface3 dark:bg-dark-surface3
          sm:rounded-tl-lg"
      >
        <div className="flex flex-col pl-4 pt-4">
          <Search
            placeholder="Search events"
            onChange={(newQuery: string) => setQuery(newQuery)}
          />
          <ul className="flex flex-col gap-4 px-4 pt-2 pb-8 max-h-full overflow-auto">
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
        <div className="p-8 h-full">
          <ActiveEventDisplay event={activeEvent} />
        </div>
      </div>
    </div>
  );
};

// Exports
export default Events;
