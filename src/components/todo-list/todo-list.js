/* eslint-disable react/prop-types */
import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
