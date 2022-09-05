import React, {memo} from 'react';
import classes from '../styles.module.scss';
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {removeTask} from "../../../store/testTodo";
import {changeTask} from "../../../store/testTodo";


const TodoItem = ({title, index, id,completed}) => {
  const dispatch =useDispatch()
    // выносить клики в отдельную ф-ию
  const click = (id) => {
    dispatch(removeTask({id}))
  }
  return (
    <li>
      <span className={clsx({
        [classes.completed]:completed
      })}>
        <input className={classes.check}
          type="checkbox"
          onChange={()=>dispatch(changeTask({id}))}
          checked={completed}
        />
        <strong>{index + 1}.</strong>
        {title}
      </span>
      <button
        onClick={()=>click(id)}
      >
        &times;
      </button>
    </li>
  );
};
// const TodoItem = ({item,changeTask,removeTask}) => {
//   return (
//     <li
//     key={item.id}
//     >
//       <span className={clsx({
//         [classes.completed]:item.completed
//       })}>
//         <input
//           type="checkbox"
//           onChange={()=>changeTask(item.id)}
//           checked={item.completed}
//         />
//         <strong>{item.index + 1}.</strong>
//         {item.title}
//       </span>
//       <button
//       onClick={()=>removeTask(item.id)}
//       >
//         &times;
//       </button>
//     </li>
//   );
// };

export default memo(TodoItem);