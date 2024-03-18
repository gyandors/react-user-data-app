import React, { useState } from 'react';
import './UserForm.css';

export default function UserForm(props) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserAge, setNewUserAge] = useState('');

  function userNameHandler(event) {
    setNewUserName(event.target.value);
  }

  function userAgeHandler(event) {
    setNewUserAge(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const newUser = { name: newUserName, age: newUserAge, id: Math.random() };
    props.onAddNewUser(newUser);

    setNewUserName('');
    setNewUserAge('');
  }

  return (
    <form className="form-control" onSubmit={formSubmitHandler}>
      <div className="user-name-control">
        <label htmlFor="user-name">Username</label>
        <input
          type="text"
          id="user-name"
          value={newUserName}
          onChange={userNameHandler}
        />
      </div>
      <div className="user-id-control">
        <label htmlFor="user-id">Age (Years)</label>
        <input
          type="number"
          id="user-id"
          value={newUserAge}
          onChange={userAgeHandler}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}
