import "./Hobbies.css";
import Card from "../UI/Card";
import HobbyFilter from "./HobbyFilter";
import { useState } from "react";
import HobbiesList from "./HobbiesList";
import HobbiesChart from "./HobbiesChart";

const Hobbies = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChnageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterHobbies = props.items.filter((hobby) => {
    return hobby.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="hobbies">
      <HobbyFilter
        selected={filteredYear}
        onChangeFilter={filterChnageHandler}
      />
      <HobbiesChart hobbies={filterHobbies} />
      <HobbiesList items={filterHobbies} />
    </Card>
  );
};

export default Hobbies;

// ------------------- Old code -------------------
// import HobbyItem from "./HobbyItem";
// import "./Hobbies.css";
// import Card from "../UI/Card";
// import HobbyFilter from "./HobbyFilter";
// import { useState } from "react";

// return (
// <Card className="hobbies">
//   <HobbyFilter
//     selected={filteredYear}
//     onChangeFilter={filterChnageHandler}
//   />
//   <HobbyItem
//     title={props.items[0].title}
//     amount={props.items[0].amount}
//     date={props.items[0].date}
//   />
//   <HobbyItem
//     title={props.items[1].title}
//     amount={props.items[1].amount}
//     date={props.items[1].date}
//   />
//   <HobbyItem
//     title={props.items[2].title}
//     amount={props.items[2].amount}
//     date={props.items[2].date}
//   />
//   <HobbyItem
//     title={props.items[3].title}
//     amount={props.items[3].amount}
//     date={props.items[3].date}
//   />
// </Card>
// );
// };

// export default Hobbies;
