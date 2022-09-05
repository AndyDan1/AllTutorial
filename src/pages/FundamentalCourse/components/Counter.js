import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('')

  const incrementor = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter <= 0) {
      return null
    }
    setCounter(counter - 1)
  }
  return (
    <div className={classes.counter}>
      <h2>Counter : {counter}</h2>
      <button onClick={incrementor}>Incrementor</button>
      <button onClick={decrement}>Decrement</button>
      <br/>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>{value}</h2>

    </div>
  );
};

export default memo(Counter);