import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../app/todoSlice';
import classes from './Modal.module.scss';

function Modal({ id, handleEdit }) {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    handleEdit();
  };

  const handleEditButton = () => {
    const editedTodo = {
      id: id,
      text: todo,
    };
    dispatch(editTodo(editedTodo));
    handleEdit();
  };
  return (
    <div className={classes.container}>
      <div className={classes['modal-card']}>
        <div>
          <h2>You'd like to edit the todo?</h2>
          <p>Please enter the edited text for the todo</p>
        </div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <div className={classes.btn}>
          <button onClick={handleEditButton}>Edit</button>
          <button onClick={handleClick}>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
