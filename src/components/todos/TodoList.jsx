import React from 'react';
import classes from './TodoList.module.scss';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={classes.todos}>
      <h2 className={classes.title}>Todo List</h2>
      <p className={classes.subtitle}>Add new todos and get yourself going!</p>
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.text}
            id={todo.id}
            isDone={todo.isDone}
          />
        ))}
    </div>
  );
}

export default TodoList;
