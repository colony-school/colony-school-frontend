// Components
import Title from "@components/global/title";
import Icon from "@components/global/icon";

const Assignments = (): JSX.Element => {
  return (
    <section className="card card-elevated h-fit">
      <Title
        icon={
          <Icon
            icon="assignment"
            className="text-light-primary dark:text-dark-primary"
          />
        }
        title={<h3>Featured</h3>}
      />
    </section>
  );
}

export default Assignments;