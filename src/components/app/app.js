import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

	maxId = 1;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		  ],
		term: ''
	}

	createTodoItem(label){
		return {
			label, 
			important: false, 
			done: false,
			id: this.maxId++
		}	
	}

	DeleteItem = (id) => {
		this.setState (({todoData}) => {
			const idx = todoData.findIndex((el) => el.id ===id);
			console.log(idx);
			const before = todoData.slice(0, idx);
			const after = todoData.slice(idx+1);
			const newArr = [...before, ...after];

			return{
				todoData: newArr
			}
		});
	};

	AddedItem = (text) => {

		const newItem = this.createTodoItem(text);

		this.setState (({todoData}) => {
			const newArr = [
				...todoData, 
				newItem
			];

			return {
				todoData: newArr
			}
		})
	}

	togleProp(arr, id, prop){
		const idx = arr.findIndex((el) => el.id ===id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [prop]: !oldItem[prop]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx+1)
		];
	}

	onTogleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togleProp(todoData, id, 'important')
			}
		});
	}

	onTogleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togleProp(todoData, id, 'done')
			}
		});
	};

	onSearchChange = (term) => {
		this.setState({term})
	}

	search(items, term){
		if(term.length === 0){
			return items
		};
		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
		});
	}

	render() {

		const {todoData, term} = this.state;

		const visibleItems = this.search(todoData, term);

		const doneCount = todoData
						.filter((el) => el.done).length;
					
		const importantCount = todoData.length - doneCount;

		const all = todoData.length;

		return (
			<div className="todo-app">
				<AppHeader toDo={importantCount} done={doneCount} all = {all}/>
				<div className="top-panel d-flex">
					<SearchPanel
					onSearchChange = {this.onSearchChange} />
					<ItemStatusFilter />
				</div>
		
				<TodoList 
					todos={visibleItems} 
					onDeleted = {this.DeleteItem}
					onTogleImportant = {this.onTogleImportant}
					onTogleDone = {this.onTogleDone} />

				<ItemAddForm
					onItemAdded = {this.AddedItem} />
			</div>
		);
	}
};

