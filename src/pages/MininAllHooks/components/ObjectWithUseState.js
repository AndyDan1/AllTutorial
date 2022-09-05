import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';

const ObjectWithUseState = () => {
  const [stateWithObject, setStateWithObject] = useState({
    title: 'Счетчик',
    date: Date.now()
  })
  const [stateWithObject1, setStateWithObject1] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  const updateTitle = () => {
    setStateWithObject1(prev => {
      return {
        ...prev,
        title: 'Новое название'
      }
      })
    }

  return (
    <div className={classes.ObjectWithUseState}>
      <h1>Викристання State у вигляді Об'єкта</h1>

      <h1>Не правильно</h1>
      <button onClick={() => setStateWithObject({title: 'Новое название'})}>Click me and difarent state</button>
      <pre>{JSON.stringify(stateWithObject, null, 2)}</pre>


      <h1>Good</h1>
      <button onClick={updateTitle}>Click me and difarent state</button>
      <pre>{JSON.stringify(stateWithObject1, null, 2)}</pre>
    </div>
  );
};

export default memo(ObjectWithUseState);