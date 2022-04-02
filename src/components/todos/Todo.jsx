import React, { useState } from 'react';
import classes from './Todo.module.scss';
import { AiOutlineFileDone } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../../app/todoSlice';
import Modal from '../modal/Modal';

function Todo({ title, id, isDone }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  const handleDone = () => {
    dispatch(completeTodo(id));
  };
  const handleEdit = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <div className={`${classes.todo} ${isDone ? classes.done : ''}`}>
      <p className={classes.text}>{title}</p>
      <div className={classes.icons}>
        <AiOutlineFileDone
          className={classes.icon}
          size={20}
          style={{ margin: '0 1rem', cursor: 'pointer' }}
          onClick={handleDone}
        />
        <AiFillDelete
          className={classes.icon}
          onClick={handleRemove}
          size={20}
          style={{ cursor: 'pointer', margin: '0 1rem' }}
        />
        <AiOutlineEdit
          className={classes.icon}
          onClick={handleEdit}
          size={20}
          style={{ cursor: 'pointer', margin: '0 1rem' }}
        />
      </div>
      {openModal && <Modal id={id} handleEdit={handleEdit} />}
    </div>
  );
}

export default Todo;
