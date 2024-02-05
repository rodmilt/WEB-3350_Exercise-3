import "./HobbyItem.css";
import HobbyDate from "./HobbyDate";
import Card from "../UI/Card";

const HobbyItem = (props) => {
  return (
    <li>
      <Card className="hobby-item">
        <HobbyDate date={props.date} />
        <div className="hobby-item__description">
          <h2>{props.title}</h2>
          <div className="hobby-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default HobbyItem;
