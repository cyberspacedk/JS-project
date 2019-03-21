import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
// деструктуризируем ТО что спустили

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">

        <TodoListItem {...itemProps } 
        onDeleted = {()=> onDeleted(id)}  // функции которые спустились с App
        onToggleDone = { ()=> onToggleDone(id) } // функции которые спустились с App
        onToggleImportant = { ()=> onToggleImportant(id) } // функции которые спустились с App  
        />
      </li>
    );
  });

  // отрисуем разметку, в elements находится разметка , которая соответствует количеству елементов 
  // массива, который в state
  return (
    <ul className="list-group todo-list">
      { elements } 
    </ul>
  );
};

export default TodoList;
