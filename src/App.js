import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random(), user: userName, age: userAge },
      ];
    });
  };

  const userDeleteHandler = (e) => {
    setUserList(userList.filter((user) => user.id !== Number(e.target.id)));
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} delete={userDeleteHandler} />
    </div>
  );
}

export default App;
