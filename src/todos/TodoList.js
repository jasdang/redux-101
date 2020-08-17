import React from 'react';
import {connect} from 'react-redux';
import './TodoList.css';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {removeTodo, markTodoAsCompleted} from './actions';

const TodoList = ({todos = [], onRemovePressed, onCompletePressed}) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        todo={todo}
        key={index}
        onRemovePressed={onRemovePressed}
        onCompletePressed={onCompletePressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
