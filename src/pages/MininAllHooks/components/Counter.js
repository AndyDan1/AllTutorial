import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';

const Counter = () => {
  const[counter,setCounter]=useState(0)

  const decrement = ()=>{
    if(counter === 0){
      return null
    }
    setCounter(counter-1)
  }
  return (

    <div className={classes.counter}>
      <h1>Счетчик : {counter}</h1>
      <button className={classes.add} onClick={()=>setCounter(counter+1)}>ADD</button>
      <button className={classes.dell} onClick={decrement}>Delete</button>
    </div>
  );
};

export default memo(Counter);