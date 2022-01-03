// Components
import Headline from "@components/global/headline";
import Icon from "@components/global/icon";

const CurrentClass = () => {
  return (
    <section className="w-full p-3 text-light-on-surface bg-light-surface2 dark:text-dark-on-surface dark:bg-dark-surface2">
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
        <div className="p-4">
          <h2 className="text-xl">Current Class</h2>
          <h3 className="text-5xl font-bold">English 8</h3>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <Headline
            icon={
              <Icon
                icon="person"
                className="text-light-primary dark:text-dark-primary"
              />
            }
            title={<h3 className="text-base">Instructor</h3>}
            subhead={
              <ul className="text-xl">
                <li>Dr John Peter Smith</li>
                <li>Mattana Tatanyang</li>
              </ul>
            }
            className="p-0"
          />
          <Headline
            icon={
              <Icon
                icon="schedule"
                className="text-light-primary dark:text-dark-primary"
              />
            }
            title={<h3 className="text-base">Time</h3>}
            subhead={<p className="text-xl">14:20-16:00</p>}
            className="p-0"
          />
          <Headline
            icon={
              <Icon
                icon="assignment"
                className="text-light-primary dark:text-dark-primary"
              />
            }
            subhead={<p className="text-xl">2 assignments due</p>}
            className="p-0"
          />
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
        <div className="p-4">
          <p>1 hour 12 minutes left</p>
          <progress value={32} max={100} className="progress" />
        </div>
        <div className="flex flex-row justify-end gap-2 p-4">
          <a href="https://classroom.google.com/u/1/c/MzQzNTA0NDkyMjgx" target="_blank" className="btn btn-outlined">Classroom</a>
          <a href="https://meet.google.com/zbm-wnny-fsi" target="_blank" className="btn btn-filled">
            <Icon icon="videocam" />
            Join Meet
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurrentClass;
