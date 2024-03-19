import React, { useState } from 'react';
import UserForm from './Components/Users/UserForm';
import UserList from './Components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  function handleAddNewUser(newUser) {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }
  return (
    <>
      <UserForm onAddNewUser={handleAddNewUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
