import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModel';
import './UserForm.css';

export default function UserForm(props) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserAge, setNewUserAge] = useState('');
  const [isValid, setisValid] = useState();

  function userNameHandler(event) {
    setNewUserName(event.target.value);
  }

  function userAgeHandler(event) {
    setNewUserAge(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (newUserName.trim().length === 0 || newUserAge.trim().length === 0) {
      setisValid({
        title: 'Invalid input',
        message: 'Please enter valid input',
      });
      return;
    }

    if (Number(newUserAge) < 0) {
      setisValid({
        title: 'Invalid age',
        message: 'Please enter valid age ( > 0 )',
      });
      return;
    }

    const newUser = { name: newUserName, age: newUserAge, id: Math.random() };
    props.onAddNewUser(newUser);

    setNewUserName('');
    setNewUserAge('');
  }

  function clickHandler() {
    setisValid();
  }

  return (
    <>
      {isValid && (
        <ErrorModal
          title={isValid.title}
          message={isValid.message}
          onClick={clickHandler}
        />
      )}
      <Card className="user-form">
        <form onSubmit={formSubmitHandler}>
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
          <button type="submit" className="btn">
            Add User
          </button>
        </form>
      </Card>
    </>
  );
}
