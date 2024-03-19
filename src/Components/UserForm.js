import React, { useState } from 'react';
import './UserForm.css';

export default function UserForm(props) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserAge, setNewUserAge] = useState('');

  const [validName, setValidName] = useState(true);
  const [validAge, setValidAge] = useState(true);

  function userNameHandler(event) {
    setNewUserName(event.target.value);
    setValidName(true);
  }

  function userAgeHandler(event) {
    setNewUserAge(event.target.value);
    setValidAge(true);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (newUserName.trim().length === 0) {
      setValidName(false);
      return;
    }
    if (newUserAge.trim().length === 0) {
      setValidAge(false);
      return;
    }
    if (Number(newUserAge) < 0 || Number(newUserAge) > 100) {
      setValidAge(false);
      return;
    }

    const newUser = { name: newUserName, age: newUserAge, id: Math.random() };
    props.onAddNewUser(newUser);

    setNewUserName('');
    setNewUserAge('');
  }

  return (
    <form className="form-control" onSubmit={formSubmitHandler}>
      <div className="user-name-control">
        <label htmlFor="user-name" style={{ color: validName ? '' : 'red' }}>
          Username
        </label>
        <input
          type="text"
          id="user-name"
          value={newUserName}
          onChange={userNameHandler}
          style={{ borderColor: validName ? '' : 'red' }}
        />
      </div>
      <div className="user-id-control">
        <label htmlFor="user-id" style={{ color: validAge ? '' : 'red' }}>
          Age (Years)
        </label>
        <input
          type="number"
          id="user-id"
          value={newUserAge}
          onChange={userAgeHandler}
          style={{ borderColor: validAge ? '' : 'red' }}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}
