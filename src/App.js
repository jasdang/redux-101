import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`
  color: #222222;
  font-family: Arial, Helvetica, sans-serif;
  margin: 1rem;
  width: 100vw;
  height: 100vh;
`;
const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default hot(module)(App);
