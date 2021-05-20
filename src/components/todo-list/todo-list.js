/* eslint-disable react/prop-types */
import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, onDeleted, onTogleDone, onTogleImportant }) => {

	const elements = todos.map((item) => {
	const { id, ...itemProps } = item;

	return (
		<li key={id} className="list-group-item">
		<TodoListItem 
			{...itemProps }
			onDeleted = {() => onDeleted(id)} 
			onTogleImportant = {() => onTogleImportant(id)}
			onTogleDone = {() => onTogleDone(id)} />
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
