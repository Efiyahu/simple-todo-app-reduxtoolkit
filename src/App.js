import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Input from './components/input/Input';
import TodoList from './components/todos/TodoList';

function App() {
  return (
    <div>
      <Header />
      <Input />
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '4rem' }}
      >
        <TodoList />
      </div>
    </div>
  );
}

export default App;
