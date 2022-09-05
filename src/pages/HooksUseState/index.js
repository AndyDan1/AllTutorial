import React, {memo, useState} from 'react';
import classes from './styles.module.scss';
import AllContainer from "../../component/AllContainer";
import TodoList from "./components/TodoList";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import{addTodo} from "../../store/testTodo";

const HooksUseState = () => {


  const [value, setValue] = useState('')
  const dispatch = useDispatch()


  const addTask=(e)=>{
    if(e.key === 'Enter'){
      if(e.target.value===''){
        return null
      }
      dispatch(addTodo({value}))
      setValue('')
    }
  }

  return (
    <section className={classes.useState}>
      <AllContainer>
        <h1>UseState Ready</h1>

        <input
          className={classes.value}
          type="text"
               value={value}
               onChange={(e)=>setValue(e.target.value)}
               onKeyPress={addTask}
        />

          <TodoList/>


      </AllContainer>
    </section>
  );
};

export default memo(HooksUseState);
// import React, {memo, useState} from 'react';
// import classes from './styles.module.scss';
// import AllContainer from "../../component/AllContainer";
// import TodoList from "./components/TodoList";
// import {useSelector} from "react-redux";
//
// const HooksUseState = () => {
//   const [todos, setTodos] = useState([
//     {id: 1, title: 'First todo', completed: false},
//     {id: 2, title: 'Second todo', completed: false},
//     {id: 3, title: 'Third todo', completed: true},
//   ])
//
//   const todos = useSelector(state => state.todos.todos)
//   const [value, setValue] = useState('')
//
//   const changeTask = (id) => {
//     const arr = todos.map(item => {
//       if (item.id === id) {
//         item.completed = !item.completed
//       }
//       return item
//     })
//     return setTodos(arr)
//   }
//
//   const removeTask = (id) => {
//     setTodos(todos.filter(item => item.id !== id))
//   }
//
//   const addTodo=(e)=>{
//     if(e.key === 'Enter'){
//       if(e.target.value==''){
//         return null
//       }
//       setTodos([
//         ...todos,
//         {
//           id:Date.now(),
//           title:value,
//           completed: false
//         }
//       ])
//       setValue('')
//     }
//   }
//
//   return (
//     <section className={classes.useState}>
//       <AllContainer>
//         <h1>UseState Ready</h1>
//
//         <input
//           className={classes.value}
//           type="text"
//                value={value}
//                onChange={(e)=>setValue(e.target.value)}
//                onKeyPress={addTodo}
//         />
//         {todos.length
//           ?
//           <TodoList
//             todos={todos}
//             changeTask={changeTask}
//             removeTask={removeTask}
//           />
//           :
//           <h2>You not have Todo you very Lazy</h2>
//
//         }
//
//       </AllContainer>
//     </section>
//   );
// };
//
// export default memo(HooksUseState);