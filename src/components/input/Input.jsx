import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todoSlice';
import classes from './Input.module.scss';

function Input() {
  const [todoInput, setTodoInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (todoInput !== '') {
      const todoObject = {
        text: todoInput,
        id: Math.random() + 1,
        isDone: false,
      };
      dispatch(addTodo(todoObject));
      setError('');
      setTodoInput('');
    } else {
      setError('Please enter something in the input field');
    }
  };
  return (
    <div className={classes.container}>
      <div>
        <input
          placeholder="Enter a todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {error.length > 0 && (
        <div style={{ color: 'red', margin: '2rem 0' }}>{error}</div>
      )}
    </div>
  );
}

export default Input;
