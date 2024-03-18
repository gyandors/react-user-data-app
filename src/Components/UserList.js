import React from 'react';
import './UserList.css';

export default function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        );
      })}
    </ul>
  );
}
