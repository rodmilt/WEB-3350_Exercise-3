import "./HobbyDate.css";

const HobbyDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="hobby-date">
      <div className="hobby-date__month">{month}</div>
      <div className="hobby-date__year">{year}</div>
      <div className="hobby-date__day">{day}</div>
    </div>
  );
};

export default HobbyDate;
