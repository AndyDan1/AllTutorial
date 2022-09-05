import React, {memo, useEffect, useState} from 'react';
import classes from './styles.module.scss';
import MyCustomLink from "../../component/MyCustomLink";
import {book} from "../../constans/Books";

const TestPage = () => {
  const[count,setCount]=useState(0)
  const[color,setColor]=useState('')
  const[name,setName]=useState('Vasa')

  const inceremnt = ()=>{
    setCount(count+1)
    console.log('click ',+1)
  }
  const decrement = ()=>{
    setCount(count-1)
    console.log('click ',-1)

  }

  useEffect(()=>{
    if(count===1){
      setColor('red')
    }
    if(count<0){
      setColor('yellow')
    }
    if(count===2){
      setColor('blue')
      setName('Andy')
    }
    if(count>2){
      setColor('green')
      setName('IVAN')

    }
  },[count])

  return (
    <div className={classes.root}>
      <h1>Test useEffect</h1>
      <h2 style={{color:color}}>test:{count}</h2>
      <h2>{name}</h2>
        <button onClick={inceremnt}>Добавить </button>
        <button onClick={decrement}>Убавить</button>
    </div>
  );
};

export default memo(TestPage);
