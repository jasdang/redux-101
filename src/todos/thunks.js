import {
  createTodo,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  removeTodo,
  markTodoAsCompleted,
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    console.log('Fetching todos json', todos);

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({text});
    console.log(body);

    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todo = await response.json();
    console.log(todo);
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: 'post',
      }
    );
    const updatedTodo = await response.json();
    dispatch(markTodoAsCompleted(updatedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
