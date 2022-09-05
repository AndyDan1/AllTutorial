import React, {memo, useState, useEffect, lazy} from 'react';
import classes from './styles.module.scss';
import AllContainer from "../../component/AllContainer";
import TodoList from "./components/TodoList";
import Context from "./components/Context";
import Loader from "../../component/Loader";
import AllModal from "../../component/AllModal";

// обычный импорт
// import AddTodo from "./components/AddTodo";

// через lazy
const AddTodo = lazy(()=> import('./components/AddTodo'))

//Test

// const AddTodo = lazy(()=> new Promise(resolve =>{
//   setTimeout(()=>{
//     resolve(import('./components/AddTodo'))
//   },3000)
// }))



const MininFastStart = () => {
  const [todos, setTodos] = useState([])
  // const [todos, setTodos] = useState([
  //   {id: 1, completed: false, title: 'Купить хлеб'},
  //   {id: 2, completed: false, title: 'Купить масло'},
  //   {id: 3, completed: false, title: 'Купить яйца'},
  //   {id: 4, completed: true, title: 'Купить молоко'}
  // ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)

        }, 2000)
      })
  }, [])

  const changeTask = (id) => {
    const arr = todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    return setTodos(arr)
  }

  const onCreate = (title) => {
    setTodos(todos.concat([{
      completed: false,
      title,
      id: Date.now()
    }]))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <section className={classes.fast_start}>
        <AllContainer>
          <h1>React tutorial</h1>

          <AllModal/>
          {/*обычный*/}

          {/*<AddTodo*/}
          {/*  onCreate={onCreate}*/}
          {/*/>*/}

          {/*линивый Lazy*/}
          <React.Suspense
            fallback={<p>Loading...</p>}
          >
            <AddTodo
              onCreate={onCreate}
            />
          </React.Suspense>

          {loading && <Loader/>}

          {todos.length
            ?
            <TodoList
              todos={todos}
              changeTask={changeTask}
            />
            : (
              loading
                ?
                null
                :
                <h2>TodoList clean</h2>
            )
          }


        </AllContainer>
      </section>
    </Context.Provider>
  );
};

export default memo(MininFastStart);