import React from 'react';
import Card from '../UI/Card';
import './UserList.css';

export default function UserList(props) {
  return (
    <Card className="user-list">
      {props.users.length === 0 && (
        <h4 style={{ textAlign: 'center' }}>
          No users found. Add some users...
        </h4>
      )}
      <ul className="">
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              <span>{user.name} </span>
              <span>{user.age} years old </span>
              <span>{user.college}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
