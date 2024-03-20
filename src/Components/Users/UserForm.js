import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './UserForm.css';

export default function UserForm(props) {
  const enteredName = useRef();
  const enteredAge = useRef();

  const [isValid, setisValid] = useState();

  function formSubmitHandler(event) {
    event.preventDefault();
    const newUserName = enteredName.current.value;
    const newUserAge = enteredAge.current.value;

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

    enteredName.current.value = '';
    enteredAge.current.value = '';
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
            <input type="text" id="user-name" ref={enteredName} />
          </div>
          <div className="user-id-control">
            <label htmlFor="user-id">Age (Years)</label>
            <input type="number" id="user-id" ref={enteredAge} />
          </div>
          <button type="submit" className="btn">
            Add User
          </button>
        </form>
      </Card>
    </>
  );
}
