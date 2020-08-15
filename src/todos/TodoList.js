import React from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';

const TodoList = ({todos = []}) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
