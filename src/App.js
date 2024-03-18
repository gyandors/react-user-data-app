import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import './App.css';

function App() {
  const [users, setUers] = useState([]);

  function handleAddNewUser(newUser) {
    setUers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }
  return (
    <div className="App">
      <UserForm onAddNewUser={handleAddNewUser} />
      <div className="user-list">
        {users.length === 0 && (
          <h4 style={{ textAlign: 'center' }}>No users found.</h4>
        )}
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
