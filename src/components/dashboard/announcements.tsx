// Components
import Title from "@components/global/title";
import MaterialIcon from "@components/global/icon";

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
    </section>
  );
}

export default Announcements;