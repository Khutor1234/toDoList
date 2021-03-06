import React from 'react';
import './app-header.css';

// eslint-disable-next-line react/prop-types
const AppHeader = ({toDo, done, all}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done, all {all}</h2>
    </div>
  );
};

export default AppHeader;
