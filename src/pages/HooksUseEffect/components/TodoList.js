import React, {memo} from 'react';
import classes from '../styles.module.scss';
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  return (
    <ul className={classes.list}>
      {todos.map((item, index)=>
      <TodoItem
      key={item.id}
      index={index}
      title={item.title}
      id={item.id}
      completed={item.completed}
      />
      )}
    </ul>
  );
};

export default memo(TodoList);