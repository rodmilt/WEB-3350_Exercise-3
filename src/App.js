import Hobbies from "./components/Hobbies/Hobbies";
import NewHobby from "./components/NewHobbies/NewHobby";
import { useState } from "react";

const DUMMY_HOBBIES = [
  {
    id: "e1",
    title: "Basketball",
    amount: 94.12,
    date: new Date(2022, 7, 3),
  },
  {
    id: "e2",
    title: "Soccer Ball",
    amount: 39.98,
    date: new Date(2021, 6, 13),
  },
  {
    id: "e3",
    title: "Playstation 5",
    amount: 700.0,
    date: new Date(2023, 12, 3),
  },
  {
    id: "e4",
    title: "Football",
    amount: 80.0,
    date: new Date(2021, 5, 25),
  },
];

const App = () => {
  const [hobbies, setHobbies] = useState(DUMMY_HOBBIES);

  const addHobbyHandler = (hobby) => {
    setHobbies((prevHobbies) => {
      return [hobby, ...prevHobbies];
    });
  };

  return (
    <div>
      <NewHobby onAddHobby={addHobbyHandler} />
      <Hobbies items={hobbies} />
    </div>
  );
};

export default App;

//----------------Old Code -------------------
// import Hobbies from "./components/Hobbies/Hobbies";
// import NewHobby from "./components/NewHobbies/NewHobby";

// const App = () => {
//   const hobbies = [
//     {
//       id: "e1",
//       title: "Basketball",
//       amount: 94.12,
//       date: new Date(2022, 7, 3),
//     },
//     {
//       id: "e2",
//       title: "Soccer Ball",
//       amount: 39.98,
//       date: new Date(2021, 6, 13),
//     },
//     {
//       id: "e3",
//       title: "Playstation 5",
//       amount: 700.0,
//       date: new Date(2023, 12, 3),
//     },
//     {
//       id: "e4",
//       title: "Football",
//       amount: 80.0,
//       date: new Date(2021, 5, 25),
//     },
//   ];

//   const addHobbyHandler = (hobby) => {
//     console.log("In App.js");
//     console.log(hobby);
//   };

//   return (
//     <div>
//       <NewHobby onAddHobby={addHobbyHandler} />
//       <Hobbies items={hobbies} />
//     </div>
//   );
// };

// export default App;
