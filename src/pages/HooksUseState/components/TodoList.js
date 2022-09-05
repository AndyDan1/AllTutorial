import React, {memo} from 'react';
import classes from '../styles.module.scss';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";


const TodoList = () => {
  const todos = useSelector( ({todos:{todos}})=> todos)


    // с использованием if else для большей читабельности
  if (todos.length) {
    return (
      <ul className={classes.list}>
        {todos.map((item, index) =>
          <TodoItem
            title={item.title}
            index={index}
            key={item.id}
            id={item.id}
            completed={item.completed}
          />
        )}
      </ul>
    );
  }
  return (<h2>You not have Todo you very Lazy</h2>)
};

export default memo(TodoList);


// import React, {memo} from 'react';
// import classes from '../styles.module.scss';
// import TodoItem from "./TodoItem";
//
// const TodoList = ({todos,changeTask,removeTask}) => {
//   return (
//     <ul className={classes.list}>
//       {todos.map((item, index) =>
//         <TodoItem
//           title={item.title}
//           index={index}
//           key={item.id}
//           id={item.id}
//           changeTask={changeTask}
//           removeTask={removeTask}
//           completed={item.completed}
//         />
//         // <TodoItem
//         //   key={item.id}
//         // item={item}
//         // changeTask={changeTask}
//         // removeTask={removeTask}
//         // />
//       )}
//     </ul>
//   );
// };
//
// export default memo(TodoList);