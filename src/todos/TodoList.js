import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({todos = [{text: 'Hello'}]}) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem todo={todo} key={index} />
    ))}
  </div>
);

export default TodoList;
