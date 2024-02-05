import HobbyItem from "./HobbyItem";
import "./HobbiesList.css";

const HobbiesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="hobbies-list__fallback">
        No expenses found for this year!
      </h2>
    );
  }

  return (
    <ul className="hobbies-list">
      {props.items.map((hobby) => (
        <HobbyItem
          key={hobby.id}
          title={hobby.title}
          amount={hobby.amount}
          date={hobby.date}
        />
      ))}
    </ul>
  );
};

export default HobbiesList;
