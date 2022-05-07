import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Please enter a valid input!",
        content: "Name/Age filed should not be empty, please enter valid data",
      });
      return;
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Age should not be < 0!",
        content: "Please eneter the age greater than 0 years",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const userNameEventHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageEventHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorModelHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          content={error.content}
          actions="Okay"
          onClick={errorModelHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={enteredName}
            onChange={userNameEventHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageEventHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
