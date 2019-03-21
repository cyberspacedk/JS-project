import React , {Component}from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component{

  uniqueId = 100;


// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// ПОЛЕ STATE
  state = {
    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'), 
    ],
    term: '',
    filter: 'all'
  }
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// функция создания НОВОГО елемента
createTodoItem (label){
  return {
    id: this.uniqueId++,
    label,
    done: false,
    important: false, 
  }
}
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// ПОИСК
// принимает масиив и словов для поиска по масиву
search(items,term){
  if(term.length === 0) return items;
  return items.filter( elem => elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
}
// функция которая вызывается в search-panel, получает слово и обновляет state
onSearchChange =(term)=>{
  this.setState({
    term
  })
}

onFilter = (filter)=>{
  this.setState({
    filter
  })
}
// -:-:-:-:-:-:-:-:-:-:-:-:ФИЛЬТР-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
filter(items, filter){
  switch(filter){
    case 'all' : return items;  
    case 'active' : return items.filter(elem=> !elem.done); 
    case 'done' : return items.filter(elem=> elem.done); 
    default: return items;  
  }
}
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
// удаляем елемент
  deleteItem = (id)=>{
    this.setState(({ todoData })=>{

      const idx = todoData.findIndex((el)=> el.id === id); 
      
      const newArr = [
        ...todoData.slice(0,idx),
        ...todoData.slice(idx+1)
      ]
      
      return {
        todoData : newArr,
      }

    }) 
  }
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// добавляем елемент
  addItem = (text)=>{  
    const newItem = this.createTodoItem(text);
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// обновляем state, деструктуризируем todoData
  this.setState(({todoData})=>{
      // создаем новый массив, в который записываем старый массив + новый елемент массива
      const newArr = [
        ...todoData,
            newItem
      ];
      // обновляем state, затирая старый массив, новым
      return {
        todoData : newArr,
      }
    });  
  }
// -:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
 
// функция определения сделанного пункта
  onToggleDone = (id) =>{
    this.setState( ({todoData})=>{

    // найдем индекс елемента по ID 
    const idx = todoData.findIndex(el => el.id === id);

    // поместим в переменную елемент массива с этим индексом
    const oldElem = todoData[idx];
    // 1.
    // обновим значение поля done, создадим переменную в которой будет старый елемент
    // и обновленное поле , которое будет перетирать предыдущее 
    const newElem = {
      ...oldElem,
      done: !oldElem.done, // взяли поле done из старого елемента и флипнули
    } 
    // 2.
    // обновим текущий массив который в поле STATE
    // создадим новый на базе старого
    const newArr = [
      ...todoData.slice(0,idx),
      newElem,
      ...todoData.slice(idx+1)
    ];
    // возвратим новый массив в STATE
    return {
      todoData : newArr
    }
  } )
}

// функция определения важного пункта. 
// делаем все по аналогии с DONE
  onToggleImportant = (id) =>{
    this.setState( ({todoData}) =>{
      const idx = todoData.findIndex(el=> el.id === id);

      const oldElem = todoData[idx];
      const newElem = {
        ...oldElem,
        important: !oldElem.important,
      }
      const newArr = [
        ...todoData.slice(0,idx),
        newElem,
        ...todoData.slice(idx+1),
      ];
      return {
        todoData : newArr
      }
    });
  }


  render(){
    const {todoData, term, filter} = this.state;

    const visileItems = this.filter(this.search( todoData, term ), filter);

    const countDone = todoData.filter(el => el.done).length;

    const totalTodo = todoData.length - countDone; 

    return(

      <div className="todo-app">

        <AppHeader toDo={totalTodo} // спускаем общее количество дел
                   done={countDone}  // спускаме количество сделанных дел
        />

        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} // спускаем функцию поиска
          />
          <ItemStatusFilter filter ={filter} // спускаем значение поля filter из state
                            onFilter = {this.onFilter} // 
          /> 
        </div>

        <TodoList 
          todos={visileItems}  // спускаем массив, который в стейте
          onDeleted={ this.deleteItem }  // спускаем функцию, которая удаляет елемент 
          onToggleDone={this.onToggleDone}  // спускаем функцию в объект props компонента TodoList 
          onToggleImportant={this.onToggleImportant}  // спускаем функцию в объект props компонента TodoList  
        />
        
        <ItemAddForm onAddItem = { this.addItem } // спускаем функцию добавления елемента
        />    

    </div>
    )
  }
 
};

