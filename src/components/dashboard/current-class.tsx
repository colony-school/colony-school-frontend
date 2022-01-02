// Components
import Headline from "@components/global/headline";
import Icon from "@components/icon";

const CurrentClass = () => {
  return (
    <section className="w-full p-3 text-light-on-surface bg-light-surface2 dark:text-dark-on-surface dark:bg-dark-surface2">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4">
          <h2 className="text-xl">Current Class</h2>
          <h3 className="text-5xl font-bold">Machine Learning 1</h3>
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
                <li>Smart Wattanapornmongkol</li>
                <li>Sadudee Theparree</li>
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
            subhead={<p className="text-xl">08:30-10:10</p>}
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
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4">
          <p>1 hour 12 minutes left</p>
          <progress value={32} max={100} className="progress" />
        </div>
        <div className="flex flex-row justify-end gap-2 p-4">
          <button className="btn btn-outlined">Classroom</button>
          <button className="btn btn-filled">
            <Icon icon="videocam" />
            Join Meet
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentClass;
