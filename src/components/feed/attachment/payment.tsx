// Components
import MaterialIcon from "@components/global/icon/material";
import Title from "@components/global/title";

const PaymentAttachment = ({
  name,
  totalOwed,
  perPersonOwed,
  unpaidPeople,
}: {
  name: string;
  totalOwed: number;
  perPersonOwed: number;
  unpaidPeople: Array<string>;
}) => {
  return (
    <li className="flex flex-col sm:grid sm:grid-cols-2 container-tertiary">
      <Title
        icon={
          <MaterialIcon
            icon="payments"
            className="text-light-tertiary dark:text-dark-tertiary"
          />
        }
        title={<h4 className="font-display text-lg">Payment: {name}</h4>}
        subhead={`฿${totalOwed.toFixed(2)} total,
          ฿${perPersonOwed.toFixed(2)} per person`}
      />
      {unpaidPeople.length == 0 ? (
        <Title
          icon={
            <MaterialIcon
              icon="check_circle"
              className="text-light-tertiary dark:text-dark-tertiary"
            />
          }
          title={<h4>Everyone in the class has paid</h4>}
        />
      ) : (
        <Title
          icon={
            <MaterialIcon
              icon="pending"
              className="text-light-tertiary dark:text-dark-tertiary"
            />
          }
          title={
            <h4 className="font-display text-lg">
              {unpaidPeople.length}{" "}
              {unpaidPeople.length == 1 ? "person hasn’t" : "people haven’t"}{" "}
              paid
            </h4>
          }
          subhead={unpaidPeople
            .map((unpaidPerson) => {
              return unpaidPerson;
            })
            .join(", ")}
        />
      )}
    </li>
  );
};

export default PaymentAttachment;
