import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Learn React</li>
        </ul>  
    );
};

const SearchPanel = () => {
    return <input placeholder = 'Search'/>;
};

const AppHeader = () => {
    return <h1>Todo List</h1>;
};

const App = () =>{
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}


ReactDom.render(<App/>, 
    document.getElementById('root'));