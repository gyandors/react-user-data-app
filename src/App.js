import React, { useState } from 'react';
import UserForm from './Components/Users/UserForm';
import UserList from './Components/Users/UserList';
import Wrapper from './Components/UI/Wrapper';

function App() {
  const [users, setUsers] = useState([]);

  function handleAddNewUser(newUser) {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }
  return (
    <Wrapper>
      <UserForm onAddNewUser={handleAddNewUser} />
      <UserList users={users} />
    </Wrapper>
  );
}

export default App;
