import MaterialIcon from "@components/global/icon";
import Title from "@components/global/title";

const InvalidAttachment = () => {
  return (
    <li className="container-error">
      <Title
        icon={
          <MaterialIcon
            icon="error"
            className="text-light-error dark:text-dark-error"
          />
        }
        title={
          <div className="flex flex-row items-baseline text-lg">
            <h4>This attachment has not been implemented or is invalid.</h4>
            <button className="btn btn-text text-light-error">Report</button>
          </div>
        }
      />
    </li>
  );
};

export default InvalidAttachment;
