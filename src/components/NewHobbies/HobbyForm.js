import { useState } from "react";
import "./HobbyForm.css";
import styles from "./HobbyForm.css";

const HobbyForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const hobbyDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if (hobbyDate.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSavedHobbyData(hobbyDate);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["new-hobby"]} ${!isValid && styles.invalid}
        `}
      >
        <div className="new-hobby__controls">
          <div className="new-hobby__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-hobby__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-hobby__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-hobby__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Hobby</button>
        </div>
      </div>
    </form>
  );
};

export default HobbyForm;
