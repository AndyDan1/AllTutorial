import React, {memo} from 'react';
import PropTypes from 'prop-types'

import classes from '../styles.module.scss';
import TodoItem from "./TodoItem";

const TodoList = ({todos,changeTask}) => {
  return (
    <ul className={classes.list}>
      {todos.map((todos, index)=>
      <TodoItem
        key={todos.id}
        index={index}
        todos={todos}
        changeTask={changeTask}
      />
      )}
    </ul>
  );
};

TodoList.propTypes={
  todos:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default memo(TodoList);