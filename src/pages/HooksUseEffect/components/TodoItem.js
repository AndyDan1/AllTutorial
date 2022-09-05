import React, {memo , useContext} from 'react';
import classes from '../styles.module.scss';
import clsx from "clsx";
import testContext from "./testContext";

const TodoItem = ({index, title, id,completed}) => {
  const {removeTask}=useContext(testContext)
  const {changeTask}=useContext(testContext)
  return (
    // наприклад ось тут
    //не можу стейт todos в item вказати todos.id
    <li>
      <span
        className={clsx({
        [classes.completed]:completed
      })}
      >
        <input
          type="checkbox"
          onChange={()=>changeTask(id)}
        />
        <strong>
          {index + 1}.
        </strong>
        {title}
      </span>
      <button
        onClick={()=>removeTask(id)}
      >
        &times;
      </button>
    </li>
  );
};

export default memo(TodoItem);