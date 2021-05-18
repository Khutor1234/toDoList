import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () =>{

    const todoData = [
        {label: 'drink coffe ', important: true},
        {label: 'drink coffeeee ', important: false},
        {label: 'drink coffeeee ', important: true},
    ];

    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData} />
        </div>
    );
}


ReactDom.render(<App/>, 
    document.getElementById('root'));