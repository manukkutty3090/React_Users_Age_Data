import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  const deleteUserHandler = (e) => {
    props.delete(e);
  };
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} onClick={deleteUserHandler} id={user.id}>
            {user.user} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
