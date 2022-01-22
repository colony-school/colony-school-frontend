// Modules
import { differenceInDays, format } from "date-fns";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

// Components
import MaterialIcon from "@components/global/icon/material";
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
    <li className={`list-page-list-item ${active ? "active" : "not-active"}`}>
      <button
        className="flex flex-row justify-between items-center gap-4 h-20"
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
            <p className="font-bold max-lines-1">{event.title}</p>
            <p className="max-lines-1">
              {event.type == "event" && "Event"}
              {event.type == "announcement" && "Announcement"}
              {" • "}
              {format(event.postDate, "dd/MM/yyyy")}
            </p>
          </div>
        </div>
        {event.image && (
          <div
            className="relative h-full rounded-r-lg aspect-square bg-light-surface-variant dark:bg-dark-surface-variant
            overflow-hidden"
          >
            <Image src={event.image} layout="fill" objectFit="cover" alt="" />
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
    <div className="card card-elevated flex flex-col">
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
            <Image
              src={event.image}
              layout="fill"
              objectFit="cover"
              alt={event.title}
            />
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
                  key={action.name}
                  href={action.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-filled"
                >
                  {action.name}
                </a>
              );
            })}
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
      image: "/images/dummybase/events/event-2.jpg",
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
    image: "/images/dummybase/events/event-2.jpg",
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
      <div className="list-page">
        <div className="list-page-left">
          <div className="list-page-search" id="main-content">
            <Search
              placeholder="Search events"
              onChange={(newQuery: string) => setQuery(newQuery)}
            />
          </div>
          <div className="list-page-list-container">
            <ul className="list-page-list">
              {events.map((event) => {
                return (
                  <EventItem
                    key={event.id}
                    event={event}
                    active={activeID == event.id}
                    setActiveID={setActiveID}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="list-page-right">
          <ActiveEventDisplay event={activeEvent} />
        </div>
      </div>
    </div>
  );
};

// Exports
export default Events;
