import React, {memo, useContext} from 'react';
import PropTypes from "prop-types";
import Context from "./Context";
import classes from '../styles.module.scss';
import clsx from "clsx";

const TodoItem = ({todos, index, changeTask}) => {
  const {removeTodo}= useContext(Context)
  return (
    <li>
        <span className={clsx({
          [classes.checked] : todos.completed
        })}>
          <input type="checkbox"
                 onChange={() => changeTask(todos.id)}
                 checked={todos.completed}
          />

          &nbsp;
          <strong>{index + 1}.</strong>
          &nbsp;{todos.title}
        </span>

      <button
      onClick={()=>removeTodo(todos.id)}
      >
        &times;
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  index: PropTypes.number,
  changeTask: PropTypes.func.isRequired
}

export default memo(TodoItem);