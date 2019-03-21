import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component { 
   
// запуск функции
 render() {
   
  // деструктуризируем в переменные данные которые приходят в объекте props
      const { label, onDeleted, onToggleImportant, onToggleDone, done , important} = this.props; 

  // создадим переменную которая хранит в себе класс или классы, которые мы можем применять к елементам
      let classNames = 'todo-list-item-label';

  // если в переменной которая хранит в себе значение поля done будет true , то добавим в переменную класс 
       if(done) classNames += ' done'; 
       if(important) classNames += ' bold'; 



    return (
      <span className="todo-list-item">

        <span className={classNames}  onClick={onToggleDone}>
          {label}
        </span>

        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>

      </span>
    );
  }
}

