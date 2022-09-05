import React, {memo, useState , useEffect} from 'react';
import classes from './styles.module.scss';
import testContext from "./components/testContext";
import TodoList from "./components/TodoList";
import AllContainer from "../../component/AllContainer";

const HooksUseEffect = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const removeTask = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const changeTask = (id) => {
    const newArr = todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    setTodos(newArr)
  }

  const addTask = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value == '') {
        return null
      }
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          completed: false
        }
      ])
      setValue('')
    }
  }
  useEffect(()=>{
  const raw = localStorage.getItem('todos') || []
    setTodos(JSON.parse(raw))
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  return (
    <testContext.Provider value={{removeTask, changeTask}}>
      <section className={classes.useEffect}>
        <AllContainer>
          <h1>useEffect Ready</h1>
          <input
            onChange={e => setValue(e.target.value)}
            className={classes.value}
            value={value}
            onKeyPress={addTask}
            type="text"/>
          <TodoList
            todos={todos}
          />
        </AllContainer>

      </section>
    </testContext.Provider>
  )
    ;
};

export default memo(HooksUseEffect);