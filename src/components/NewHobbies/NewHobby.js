import HobbyForm from "./HobbyForm";
import "./NewHobby.css";
import { useState } from "react";

const NewHobby = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveHobbyDataHandler = (enteredHobby) => {
    const hobbyData = {
      ...enteredHobby,
      id: Math.random().toString(),
    };
    props.onAddHobby(hobbyData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-hobby">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Hobby</button>
      )}
      {isEditing && (
        <HobbyForm
          onSavedHobbyData={saveHobbyDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewHobby;

// ----------Old Code------------------
// const NewHobby = (props) => {
//   const saveHobbyDataHandler = (enteredHobby) => {
//     const hobbyData = {
//       ...enteredHobby,
//       id: Math.random().toString(),
//     };
//     props.onAddHobby(hobbyData);
//     setIsEditing(false);
//   };

//    const startEditingHandler = () => {
//      setIsEditing(true);
//    };

//    const stopEditingHandler = () => {
//      setIsEditing(false);
//    };

//   return (
//     <div className="new-hobby">
//       <HobbyForm onSaveHobbyData={saveHobbyDataHandler} />
//     </div>
//   );
// };

// export default NewHobby;
