import React, {memo, useEffect, useRef, useState} from 'react';
import classes from '../styles.module.scss';

const UseRef = () => {
  //First
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current++
    console.log('render')
  })
  //__________
  //Second
  // Фокус на елемент
  // const[focus,setFocus]=useState()
  const inputRef = useRef(null)
  const focus = () => inputRef.current.focus()

  //______
  //Third
  // предыдущее значение
  const [inputPrevValue, setInputPrevValue] = useState('initial')
  const prevValue = useRef('')

  useEffect(() => {
    prevValue.current = inputPrevValue
  }, [inputPrevValue])

  return (
    <div className={classes.useRef}>
      <h1>UseRef для чего</h1>

      <div className={classes.description}>
        <p>Сохраняет состояние рендера но при этом не вызывает сам рендер</p>
        <p>Похож на useState но в отличии от него является не контролируемым</p>
        <p>Пример записи:</p>
        <p> const renderCount= useRef(1)</p>
        <p>Обращение к useRef через ---- name.current</p>
      </div>
      <h2>Количество Рендеров: {renderCount.current}</h2>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h1>useRef и Фокус</h1>
      <div className={classes.description}>
        <p>Так же используется для ссылки на какие-то DOM-елементы</p>
      </div>
      <h2>Фокус</h2>
      <input
        type="text"
        ref={inputRef}
      />
      <button
        onClick={focus}
      >
        Click me
      </button>

      <h1>useRef и Предыдущее значение</h1>
      <div className={classes.description}>
        <p>useRef используют для показа предыдущего значения</p>
      </div>
      <h2>Предыдущий рендер : {prevValue.current}</h2>
      <input type="text"
             value={inputPrevValue}
             onChange={e => setInputPrevValue(e.target.value)}
      />
    </div>
  );
};

export default memo(UseRef);